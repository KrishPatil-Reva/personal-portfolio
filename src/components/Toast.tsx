import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { ToastMessage } from '../types';

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-lg bg-[#171b26]/95 border border-cyan-500/40 text-[#dfe2f1] shadow-xl backdrop-blur-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-3"
          style={{ boxShadow: '0 8px 30px -4px rgba(6, 182, 212, 0.25)' }}
        >
          {toast.type === 'error' ? (
            <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
          ) : toast.type === 'info' ? (
            <Info className="w-5 h-5 text-cyan-400 shrink-0" />
          ) : (
            <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
          )}
          <span className="text-sm font-medium pr-2">{toast.text}</span>
          <button
            onClick={() => onDismiss(toast.id)}
            className="text-slate-400 hover:text-white p-1 transition-colors"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
