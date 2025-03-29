"use client";

import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

interface ExportButtonsProps {
  labelRef: React.RefObject<HTMLDivElement>;
  appName: string;
}

export default function ExportButtons({ labelRef, appName }: ExportButtonsProps) {
  const [isExporting, setIsExporting] = useState(false);
  const [exportType, setExportType] = useState<'pdf' | 'image' | null>(null);
  const { toast } = useToast();

  const exportAsPDF = async () => {
    try {
      setIsExporting(true);
      setExportType('pdf');

      // Simulate export
      setTimeout(() => {
        setIsExporting(false);
        setExportType(null);
        toast({
          title: "PDF Exported",
          description: "Your nutrition label has been exported as a PDF",
          duration: 3000,
        });
      }, 1000);
    } catch (error) {
      console.error("Error exporting PDF:", error);
      setIsExporting(false);
      setExportType(null);
    }
  };

  const exportAsImage = async () => {
    try {
      setIsExporting(true);
      setExportType('image');

      // Simulate export
      setTimeout(() => {
        setIsExporting(false);
        setExportType(null);
        toast({
          title: "Image Exported",
          description: "Your nutrition label has been exported as an image",
          duration: 3000,
        });
      }, 1000);
    } catch (error) {
      console.error("Error exporting image:", error);
      setIsExporting(false);
      setExportType(null);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mt-4">
      <button
        onClick={exportAsPDF}
        disabled={isExporting}
        className="bg-[#f6b90e] hover:bg-[#e6ad0e] text-black font-medium py-2 px-4 rounded flex items-center justify-center"
      >
        {isExporting && exportType === 'pdf' ? 'Exporting PDF...' : 'Export as PDF'}
      </button>

      <button
        onClick={exportAsImage}
        disabled={isExporting}
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded flex items-center justify-center"
      >
        {isExporting && exportType === 'image' ? 'Exporting Image...' : 'Export as Image'}
      </button>
    </div>
  );
}
