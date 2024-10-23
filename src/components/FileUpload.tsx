import React, { useCallback, useState } from 'react';
import { Upload, FileText, AlertCircle } from 'lucide-react';

export default function FileUpload() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragging(true);
    } else if (e.type === "dragleave") {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      const file = files[0];
      if (file.type === "application/pdf") {
        setFile(file);
        setError(null);
      } else {
        setError("Please upload a PDF file");
      }
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type === "application/pdf") {
        setFile(file);
        setError(null);
      } else {
        setError("Please upload a PDF file");
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          isDragging
            ? "border-indigo-500 bg-indigo-50"
            : "border-gray-300 hover:border-indigo-400"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center space-y-4">
          <Upload className="h-12 w-12 text-gray-400" />
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-700">
              Drop your PDF here
            </h3>
            <p className="text-sm text-gray-500">
              or click to select a file from your computer
            </p>
          </div>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors cursor-pointer"
          >
            Select File
          </label>
        </div>
      </div>

      {error && (
        <div className="mt-4 p-4 bg-red-50 rounded-md flex items-center space-x-2 text-red-700">
          <AlertCircle className="h-5 w-5" />
          <span>{error}</span>
        </div>
      )}

      {file && !error && (
        <div className="mt-4 p-4 bg-green-50 rounded-md">
          <div className="flex items-center space-x-3">
            <FileText className="h-5 w-5 text-green-600" />
            <span className="text-green-700">
              {file.name} ({Math.round(file.size / 1024)} KB)
            </span>
          </div>
        </div>
      )}
    </div>
  );
}