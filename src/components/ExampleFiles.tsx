"use client";

import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

interface ExampleFile {
  name: string;
  path: string;
}

interface ExampleFilesProps {
  onFileDownload?: (filePath: string) => void;
}

export default function ExampleFiles({ onFileDownload }: ExampleFilesProps) {
  const [activeFile, setActiveFile] = useState<string | null>(null);
  const { toast } = useToast();

  const exampleFiles: ExampleFile[] = [
    { name: 'Weather App Pro', path: '/example-app.txt' },
    { name: 'GamerHub Pro', path: '/example-gaming-app.txt' },
    { name: 'SafeWallet Finance', path: '/example-finance-app.txt' },
    { name: 'HealthTrack Plus', path: '/example-health-app.txt' }
  ];

  const handleExampleDownload = (e: React.MouseEvent<HTMLAnchorElement>, file: ExampleFile) => {
    e.preventDefault();

    // Call the parent handler if provided
    if (onFileDownload) {
      onFileDownload(file.path);
    }

    // Show toast
    toast({
      title: `${file.name} downloaded`,
      description: "You can now use this file to test the upload functionality.",
      duration: 3000,
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
      <h3 className="text-lg font-bold mb-4">Example Files</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {exampleFiles.map((file, index) => (
          <div key={index} className="flex items-center">
            <a
              href={file.path}
              download
              className="text-[#f6b90e] hover:underline flex items-center"
              onClick={(e) => handleExampleDownload(e, file)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>{file.name}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
