import React from 'react';
import { Loader2 } from 'lucide-react';

interface ProcessingStatusProps {
  status: string;
}

export default function ProcessingStatus({ status }: ProcessingStatusProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="h-8 w-8 text-indigo-600 animate-spin" />
          <h3 className="text-xl font-semibold text-gray-900">Processing...</h3>
          <p className="text-gray-600 text-center">{status}</p>
        </div>
      </div>
    </div>
  );
}