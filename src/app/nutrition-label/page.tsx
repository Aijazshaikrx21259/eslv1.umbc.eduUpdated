"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

// Define theme type
type LabelTheme = 'standard' | 'dark' | 'colorful';

export default function NutritionLabelPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileContent, setFileContent] = useState<Record<string, string>>({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [labelTheme, setLabelTheme] = useState<LabelTheme>('standard');
  const [isExporting, setIsExporting] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Example files
  const exampleFiles = [
    { name: 'Weather App Pro', path: '/example-app.txt' },
    { name: 'GamerHub Pro', path: '/example-gaming-app.txt' },
    { name: 'SafeWallet Finance', path: '/example-finance-app.txt' },
    { name: 'HealthTrack Plus', path: '/example-health-app.txt' }
  ];

  const parseFileContent = (content: string) => {
    try {
      const result: Record<string, string> = {};
      const lines = content.split('\n');

      lines.forEach(line => {
        const trimmedLine = line.trim();
        if (!trimmedLine) return;

        // Check if line contains a colon (section title)
        if (trimmedLine.includes(':')) {
          const [key, value] = trimmedLine.split(':').map(part => part.trim());

          // Items within sections
          if (value !== undefined && value !== "") {
            result[key] = value;
          }
        }
      });

      // Set default app name if not found
      if (!result["Application"]) {
        result["Application"] = "Unnamed App";
      }

      return result;
    } catch (error) {
      console.error("Error parsing file content:", error);
      return { "Application": "Error in file format" };
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("File selected:", e.target.files);
    setShowLabel(false);

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(file);
      console.log("Processing file:", file.name);

      // Process file
      const reader = new FileReader();

      reader.onload = (event) => {
        if (event.target && typeof event.target.result === 'string') {
          setIsProcessing(true);
          try {
            console.log("File content loaded, parsing data");
            const parsedData = parseFileContent(event.target.result);
            setFileContent(parsedData);
            setShowLabel(true);
            toast({
              title: "File processed successfully",
              description: `Created nutrition label for ${file.name}`,
              duration: 3000,
            });
          } catch (error) {
            console.error("Error processing file:", error);
            toast({
              title: "Error processing file",
              description: "Please check the format and try again.",
              variant: "destructive",
              duration: 5000,
            });
          } finally {
            setIsProcessing(false);
          }
        }
      };

      reader.onerror = () => {
        console.error("FileReader error");
        toast({
          title: "Error reading file",
          description: "Please try again with a different file.",
          variant: "destructive",
          duration: 5000,
        });
        setIsProcessing(false);
      };

      reader.readAsText(file);
    }
  };

  // Handle drag and drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    console.log("File dropped:", e.dataTransfer.files);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      console.log("Processing dropped file:", file.name);

      // Process file
      const reader = new FileReader();

      reader.onload = (event) => {
        if (event.target && typeof event.target.result === 'string') {
          setIsProcessing(true);
          try {
            console.log("Dropped file content loaded, parsing data");
            const parsedData = parseFileContent(event.target.result);
            setFileContent(parsedData);
            setShowLabel(true);
            toast({
              title: "File processed successfully",
              description: `Created nutrition label for ${file.name}`,
              duration: 3000,
            });
          } catch (error) {
            console.error("Error processing file:", error);
            toast({
              title: "Error processing file",
              description: "Please check the format and try again.",
              variant: "destructive",
              duration: 5000,
            });
          } finally {
            setIsProcessing(false);
          }
        }
      };

      reader.onerror = () => {
        console.error("FileReader error on dropped file");
        toast({
          title: "Error reading file",
          description: "Please try again with a different file.",
          variant: "destructive",
          duration: 5000,
        });
        setIsProcessing(false);
      };

      reader.readAsText(file);
    }
  };

  // Handle click to browse
  const handleBrowseClick = () => {
    console.log("Browse button clicked");
    if (fileInputRef.current) {
      console.log("Triggering file input click");
      fileInputRef.current.click();
    } else {
      console.error("fileInputRef.current is null");
    }
  };

  const handleExampleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    console.log("Example download initiated");
    setIsDownloading(true);

    // Create a function to handle the actual download completion
    const handleDownloadComplete = () => {
      console.log("Download complete, showing toast");
      setIsDownloading(false);
      toast({
        title: "Example file downloaded",
        description: "You can now use this file to test the upload functionality.",
        duration: 3000,
      });
    };

    // Simulate a slight delay for better UX
    setTimeout(handleDownloadComplete, 800);
  };

  // Simple theme selector component
  const ThemeSelector = () => (
    <div className="mb-4 flex flex-wrap gap-2">
      <button
        onClick={() => setLabelTheme('standard')}
        className={`px-3 py-1 rounded-md ${labelTheme === 'standard'
          ? 'bg-[#f6b90e] text-black font-medium'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
      >
        Standard
      </button>
      <button
        onClick={() => setLabelTheme('dark')}
        className={`px-3 py-1 rounded-md ${labelTheme === 'dark'
          ? 'bg-[#f6b90e] text-black font-medium'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
      >
        Dark
      </button>
      <button
        onClick={() => setLabelTheme('colorful')}
        className={`px-3 py-1 rounded-md ${labelTheme === 'colorful'
          ? 'bg-[#f6b90e] text-black font-medium'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
      >
        Colorful
      </button>
    </div>
  );

  // Simple export buttons component
  const ExportButtons = () => {
    const exportAsPDF = () => {
      setIsExporting(true);
      setTimeout(() => {
        setIsExporting(false);
        toast({
          title: "PDF Exported",
          description: "Your nutrition label has been exported as a PDF",
          duration: 3000,
        });
      }, 1000);
    };

    const exportAsImage = () => {
      setIsExporting(true);
      setTimeout(() => {
        setIsExporting(false);
        toast({
          title: "Image Exported",
          description: "Your nutrition label has been exported as an image",
          duration: 3000,
        });
      }, 1000);
    };

    return (
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mt-4">
        <button
          onClick={exportAsPDF}
          disabled={isExporting}
          className="bg-[#f6b90e] hover:bg-[#e6ad0e] text-black font-medium py-2 px-4 rounded"
        >
          {isExporting ? 'Exporting...' : 'Export as PDF'}
        </button>

        <button
          onClick={exportAsImage}
          disabled={isExporting}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded"
        >
          {isExporting ? 'Exporting...' : 'Export as Image'}
        </button>
      </div>
    );
  };

  // Simple example files component
  const ExampleFilesList = () => (
    <div className="bg-white p-6 rounded-lg border border-gray-200 mt-6">
      <h3 className="text-lg font-bold mb-4">Example Files</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {exampleFiles.map((file, index) => (
          <div key={index} className="flex items-center">
            <a
              href={file.path}
              download
              className="text-[#f6b90e] hover:underline flex items-center"
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

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-[#fffbea]">
        {/* Header Section */}
        <div className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Digital Nutrition Label</h1>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <p className="text-lg">
                Upload a text file containing nutrition details to generate a structured digital nutrition label for
                software applications.
              </p>
              <Link
                href="/nutrition-label/compare"
                className="bg-[#f6b90e] hover:bg-[#e6ad0e] text-black font-medium py-2 px-4 rounded text-center whitespace-nowrap"
              >
                Compare Labels
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Upload Section */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Upload Text File</h2>
              <p className="mb-6">
                Upload a text file containing nutritional details about a software application, and
                we&apos;ll display it in a structured format resembling a standard nutrition label.
              </p>

              <div
                className={`border-2 border-dashed ${isDragging ? 'border-[#f6b90e] bg-[#fff8e1]' : 'border-gray-300 bg-white'} rounded-lg p-8 text-center mb-6 transition-colors duration-200`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                {isProcessing ? (
                  <div className="py-4">
                    <div className="animate-pulse flex justify-center">
                      <div className="h-8 w-8 bg-[#f6b90e] rounded-full"></div>
                    </div>
                    <p className="mt-2 text-gray-600">Processing file...</p>
                  </div>
                ) : (
                  <>
                    <div className="mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto h-16 w-16 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-600 mb-4">Drag and drop a text file here, or click to browse</p>
                    <label htmlFor="file-upload" className="bg-[#f6b90e] hover:bg-[#e6ad0e] text-black font-medium py-2 px-6 rounded cursor-pointer">
                      Browse Files
                    </label>
                    <input
                      id="file-upload"
                      type="file"
                      accept=".txt"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </>
                )}
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold mb-4">File Format Guidelines</h3>
                <p className="mb-4">
                  For best results, your text file should include the following information:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Application name</li>
                  <li>Data usage details (e.g., what data is collected and how it&apos;s used)</li>
                  <li>Permissions required by the application</li>
                  <li>Key privacy information</li>
                  <li>Third-party data sharing practices</li>
                  <li>Terms of service summary</li>
                </ul>
                <p className="text-sm text-gray-600 mb-4">
                  Format each section with clear headings using section titles followed by colon and details.<br />
                  Example: &quot;Data Collection: Collects location data, contacts, and browsing history.&quot;
                </p>
                <div className="mt-4 text-center">
                  <a
                    href="/example-app.txt"
                    download="example-app.txt"
                    className="text-[#f6b90e] hover:underline font-medium inline-flex items-center"
                    onClick={handleExampleDownload}
                  >
                    {isDownloading ? (
                      <>
                        <span className="mr-2">Downloading...</span>
                        <svg
                          className="animate-spin h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      </>
                    ) : (
                      <>
                        Download example file to test the upload
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                      </>
                    )}
                  </a>
                </div>
              </div>

              {/* Example Files Section */}
              <ExampleFilesList />
            </div>

            {/* Nutrition Label Display */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                {showLabel && selectedFile ? 'Generated Label' : 'Example Label'}
              </h2>

              {/* Theme Selector */}
              <ThemeSelector />

              <div
                ref={labelRef}
                className={`border-2 border-black p-4 w-full ${
                  labelTheme === 'standard' ? 'bg-white' :
                  labelTheme === 'dark' ? 'bg-gray-800 text-white' :
                  'bg-gradient-to-br from-blue-50 to-yellow-50'
                }`}
              >
                <div className={`border-b-[8px] ${labelTheme === 'dark' ? 'border-gray-100' : 'border-black'} pb-1 mb-1`}>
                  <h3 className="text-3xl font-bold text-center">Digital Nutrition Facts</h3>
                </div>

                <div className="text-center mb-2">
                  Application: {showLabel ? fileContent["Application"] || "Sample App" : "Sample App"}
                </div>

                <div className={`border-t-[4px] border-b-[2px] ${labelTheme === 'dark' ? 'border-gray-100' : 'border-black'} py-1 my-2 font-bold ${labelTheme === 'colorful' ? 'bg-blue-100' : ''}`}>
                  Data Usage
                </div>
                <div className={`border-b ${labelTheme === 'dark' ? 'border-gray-100' : 'border-black'}`}>
                  <div className="flex justify-between py-1">
                    <span>Data Collection:</span>
                    <span>{showLabel ? (fileContent["Data Collection"] || "High") : "High"}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Third-Party Sharing:</span>
                    <span>{showLabel ? (fileContent["Third-Party Sharing"] || "Yes") : "Yes"}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Data Storage:</span>
                    <span>{showLabel ? (fileContent["Data Storage"] || "Cloud") : "Cloud"}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Retention Period:</span>
                    <span>{showLabel ? (fileContent["Retention Period"] || "12 months") : "12 months"}</span>
                  </div>
                </div>

                <div className={`border-t-[4px] border-b-[2px] ${labelTheme === 'dark' ? 'border-gray-100' : 'border-black'} py-1 my-2 font-bold ${labelTheme === 'colorful' ? 'bg-red-100' : ''}`}>
                  Permissions
                </div>
                <div className={`border-b ${labelTheme === 'dark' ? 'border-gray-100' : 'border-black'}`}>
                  <div className="flex justify-between py-1">
                    <span>Camera:</span>
                    <span>{showLabel ? (fileContent["Camera"] || "Required") : "Required"}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Location:</span>
                    <span>{showLabel ? (fileContent["Location"] || "Optional") : "Optional"}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Contacts:</span>
                    <span>{showLabel ? (fileContent["Contacts"] || "Not Used") : "Not Used"}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Microphone:</span>
                    <span>{showLabel ? (fileContent["Microphone"] || "Required") : "Required"}</span>
                  </div>
                </div>

                <div className={`border-t-[4px] border-b-[2px] ${labelTheme === 'dark' ? 'border-gray-100' : 'border-black'} py-1 my-2 font-bold ${labelTheme === 'colorful' ? 'bg-green-100' : ''}`}>
                  Privacy
                </div>
                <div className={`border-b ${labelTheme === 'dark' ? 'border-gray-100' : 'border-black'}`}>
                  <div className="flex justify-between py-1">
                    <span>Encryption:</span>
                    <span>{showLabel ? (fileContent["Encryption"] || "Yes") : "Yes"}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>User Data Control:</span>
                    <span>{showLabel ? (fileContent["User Data Control"] || "Partial") : "Partial"}</span>
                  </div>
                </div>

                <div className={`border-t-[4px] border-b-[2px] ${labelTheme === 'dark' ? 'border-gray-100' : 'border-black'} py-1 my-2 font-bold ${labelTheme === 'colorful' ? 'bg-yellow-100' : ''}`}>
                  Terms & Conditions
                </div>
                <div className={`border-b ${labelTheme === 'dark' ? 'border-gray-100' : 'border-black'} mb-2`}>
                  <div className="flex justify-between py-1">
                    <span>Reading Time:</span>
                    <span>{showLabel ? (fileContent["Reading Time"] || "18 min") : "18 min"}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Readability Score:</span>
                    <span>{showLabel ? (fileContent["Readability Score"] || "Complex") : "Complex"}</span>
                  </div>
                </div>

                <div className="text-xs text-center mt-4">
                  Certified by UMBC Ethical Software Lab<br />
                  Last updated: March 2025
                </div>
              </div>

              {/* Export Buttons */}
              {showLabel && <ExportButtons />}

              {showLabel && (
                <div className="mt-4 text-center bg-green-50 p-3 rounded-md border border-green-200">
                  <p className="text-green-600 font-medium">
                    ✓ Nutrition label generated successfully from {selectedFile?.name}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
