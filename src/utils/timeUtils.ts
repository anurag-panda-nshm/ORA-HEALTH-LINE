export interface ClinicStatus {
  isOpen: boolean;
  statusText: string;
  nextEvent: string;
  currentDayName: string;
  istTimeFormatted: string;
  todayChambers: string[];
}

export function getClinicLiveStatus(): ClinicStatus {
  try {
    const now = new Date();
    // Convert to Asia/Kolkata (IST = UTC+5:30)
    const istString = now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
    const istDate = new Date(istString);

    const hours = istDate.getHours();
    const minutes = istDate.getMinutes();
    const timeInMinutes = hours * 60 + minutes;
    const day = istDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

    const daysMap = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayName = daysMap[day];

    // Simlapal Main Clinic: Daily 6:00 AM - 2:00 PM (360 - 840 mins) & 7:00 PM - 9:00 PM (1140 - 1260 mins)
    const morningStart = 6 * 60; // 06:00 -> 360
    const morningEnd = 14 * 60; // 14:00 -> 840
    const eveningStart = 19 * 60; // 19:00 -> 1140
    const eveningEnd = 21 * 60; // 21:00 -> 1260

    let isOpen = false;
    let statusText = 'Closed';
    let nextEvent = '';

    if (timeInMinutes >= morningStart && timeInMinutes < morningEnd) {
      isOpen = true;
      const remHours = Math.floor((morningEnd - timeInMinutes) / 60);
      const remMins = (morningEnd - timeInMinutes) % 60;
      statusText = 'Open Now (Morning Session)';
      nextEvent = `Closes in ${remHours > 0 ? `${remHours}h ` : ''}${remMins}m at 2:00 PM`;
    } else if (timeInMinutes >= eveningStart && timeInMinutes < eveningEnd) {
      isOpen = true;
      const remHours = Math.floor((eveningEnd - timeInMinutes) / 60);
      const remMins = (eveningEnd - timeInMinutes) % 60;
      statusText = 'Open Now (Evening Session)';
      nextEvent = `Closes in ${remHours > 0 ? `${remHours}h ` : ''}${remMins}m at 9:00 PM`;
    } else if (timeInMinutes < morningStart) {
      const diff = morningStart - timeInMinutes;
      const remHours = Math.floor(diff / 60);
      const remMins = diff % 60;
      statusText = 'Closed for the Night';
      nextEvent = `Opens today at 6:00 AM (${remHours > 0 ? `${remHours}h ` : ''}${remMins}m)`;
    } else if (timeInMinutes >= morningEnd && timeInMinutes < eveningStart) {
      const diff = eveningStart - timeInMinutes;
      const remHours = Math.floor(diff / 60);
      const remMins = diff % 60;
      statusText = 'Afternoon Break';
      nextEvent = `Evening session opens at 7:00 PM (${remHours > 0 ? `${remHours}h ` : ''}${remMins}m)`;
    } else {
      statusText = 'Closed for the Night';
      nextEvent = 'Opens tomorrow at 6:00 AM';
    }

    // Determine other branch chambers active today
    const todayChambers: string[] = ['Simlapal Main Clinic (Daily)'];
    if (day === 1 || day === 4) {
      // Monday or Thursday
      todayChambers.push('Panchmura – Dev Drug House (From 4:30 PM)');
    }
    if (day === 2 || day === 5) {
      // Tuesday or Friday
      todayChambers.push('Raipur – Medicare Polyclinic (From 4:00 PM)');
    }
    if (day === 0) {
      // Sunday
      todayChambers.push('Laxmisagar – Cure Pharmacy (From 6:00 PM)');
    }

    const timeFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Kolkata',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });

    return {
      isOpen,
      statusText,
      nextEvent,
      currentDayName,
      istTimeFormatted: timeFormatter.format(istDate) + ' IST',
      todayChambers
    };
  } catch {
    return {
      isOpen: true,
      statusText: 'Open Daily',
      nextEvent: 'Morning 6:00 AM – 2:00 PM & Evening 7:00 PM – 9:00 PM',
      currentDayName: 'Today',
      istTimeFormatted: 'IST',
      todayChambers: ['Simlapal Main Clinic']
    };
  }
}
