import React, { useState, useEffect } from 'react';
import { getClinicLiveStatus, ClinicStatus } from '../utils/timeUtils';
import { Clock, MapPin, CheckCircle2 } from 'lucide-react';

export const LiveStatusBadge: React.FC = () => {
  const [status, setStatus] = useState<ClinicStatus>(getClinicLiveStatus());

  useEffect(() => {
    // Update every minute
    const interval = setInterval(() => {
      setStatus(getClinicLiveStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900 text-slate-200 border-b border-slate-800 text-xs py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
        {/* Status indicator */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 font-medium">
            <span
              className={`inline-block w-2 h-2 rounded-full ${
                status.isOpen ? 'bg-teal-400' : 'bg-amber-400'
              }`}
            />
            <span className="font-semibold text-white">{status.statusText}</span>
          </div>
          <span className="text-slate-500" aria-hidden="true">·</span>
          <span className="text-slate-300">{status.nextEvent}</span>
        </div>

        {/* Chambers active today */}
        <div className="flex items-center gap-3 text-slate-400">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-teal-400" />
            <span className="font-mono tabular-nums text-slate-300">{status.istTimeFormatted}</span>
          </div>
          <span className="hidden sm:inline text-slate-600" aria-hidden="true">·</span>
          <div className="hidden sm:flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-teal-400" />
            <span className="text-slate-300">
              Chambers today: <strong className="text-white font-medium">{status.todayChambers.join(', ')}</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
