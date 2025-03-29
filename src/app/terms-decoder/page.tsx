"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Clock, FileText, UploadCloud, ExternalLink, ThumbsUp, ThumbsDown } from "lucide-react";
import Link from "next/link";

export default function TermsDecoderPage() {
  const [activeTab, setActiveTab] = useState("upload");
  const [urlInput, setUrlInput] = useState("");
  const [showExample, setShowExample] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="bg-[#f6b90e]/10 py-12">
          <div className="umbc-container">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service Decoder</h1>
            <p className="text-lg mb-8 max-w-3xl">
              Decode and analyze complex Terms of Service agreements to understand privacy implications without reading the entire document.
            </p>
          </div>
        </div>

        <div className="umbc-container py-12">
          <Tabs defaultValue="upload" className="w-full" onValueChange={(value) => setActiveTab(value)}>
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="upload">Upload Document</TabsTrigger>
              <TabsTrigger value="url">Enter URL</TabsTrigger>
              <TabsTrigger value="text">Paste Text</TabsTrigger>
            </TabsList>

            <TabsContent value="upload" className="p-4 border rounded-lg">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <div className="mb-4">
                  <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Drag and drop a Terms of Service document here, or click to browse
                </p>
                <label htmlFor="tos-upload" className="bg-[#f6b90e] hover:bg-[#e6ad0e] text-black font-medium py-2 px-4 rounded cursor-pointer">
                  Browse Files
                </label>
                <input id="tos-upload" type="file" accept=".txt,.pdf,.docx" className="hidden" />
                <p className="text-xs text-gray-500 mt-4">
                  Supported formats: .txt, .pdf, .docx (max 10MB)
                </p>
              </div>
            </TabsContent>

            <TabsContent value="url" className="p-4 border rounded-lg">
              <div className="space-y-4">
                <div>
                  <label htmlFor="tos-url" className="block text-sm font-medium mb-2">
                    Enter the URL of a Terms of Service page
                  </label>
                  <div className="flex gap-2">
                    <Input
                      id="tos-url"
                      type="url"
                      placeholder="https://example.com/terms-of-service"
                      className="flex-grow"
                      value={urlInput}
                      onChange={(e) => setUrlInput(e.target.value)}
                    />
                    <Button
                      className="bg-[#f6b90e] hover:bg-[#e6ad0e] text-black"
                      onClick={() => setShowExample(true)}
                    >
                      Analyze
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Our system will visit the URL and extract the Terms of Service content automatically.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <Card className="cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => {
                    setUrlInput("https://www.facebook.com/terms.php");
                    setShowExample(true);
                  }}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Facebook</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-gray-500">facebook.com/terms.php</CardContent>
                  </Card>

                  <Card className="cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => {
                    setUrlInput("https://twitter.com/tos");
                    setShowExample(true);
                  }}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Twitter</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-gray-500">twitter.com/tos</CardContent>
                  </Card>

                  <Card className="cursor-pointer hover:bg-gray-50 transition-colors" onClick={() => {
                    setUrlInput("https://www.instagram.com/terms/accept/");
                    setShowExample(true);
                  }}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm">Instagram</CardTitle>
                    </CardHeader>
                    <CardContent className="text-xs text-gray-500">instagram.com/terms/accept</CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="text" className="p-4 border rounded-lg">
              <div className="space-y-4">
                <div>
                  <label htmlFor="tos-text" className="block text-sm font-medium mb-2">
                    Paste Terms of Service text
                  </label>
                  <Textarea
                    id="tos-text"
                    placeholder="Paste the terms of service text here..."
                    className="min-h-[200px]"
                  />
                </div>
                <div className="flex justify-end">
                  <Button
                    className="bg-[#f6b90e] hover:bg-[#e6ad0e] text-black"
                    onClick={() => setShowExample(true)}
                  >
                    Analyze
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {showExample && (
            <div className="mt-12">
              <div className="border-b border-gray-200 pb-4 mb-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Analysis Results</h2>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>Last updated: March 2025</span>
                  </Badge>
                </div>
                <p className="text-gray-600">
                  {activeTab === "url" ? urlInput : "Sample Terms of Service Document"}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Quick Stats</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-gray-500">Reading Time</span>
                            <span className="text-sm font-medium">32 minutes</span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full">
                            <div className="h-2 bg-red-500 rounded-full" style={{ width: '85%' }}></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-gray-500">Readability</span>
                            <span className="text-sm font-medium">College Level</span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full">
                            <div className="h-2 bg-yellow-500 rounded-full" style={{ width: '65%' }}></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-gray-500">Complexity</span>
                            <span className="text-sm font-medium">High</span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full">
                            <div className="h-2 bg-red-500 rounded-full" style={{ width: '78%' }}></div>
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-gray-500">Privacy Score</span>
                            <span className="text-sm font-medium">Poor</span>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full">
                            <div className="h-2 bg-red-500 rounded-full" style={{ width: '25%' }}></div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Key Concerns</CardTitle>
                        <CardDescription>Important issues found in this document</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                            <span className="text-sm">Extensive third-party data sharing without clear opt-out</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                            <span className="text-sm">Mandatory arbitration clause limits legal remedies</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                            <span className="text-sm">Vague language around data retention periods</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                            <span className="text-sm">Right to modify terms without direct notification</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Summarized Terms of Service</CardTitle>
                      <CardDescription>A simplified version of the full document</CardDescription>
                    </CardHeader>
                    <CardContent className="prose max-w-none">
                      <h3>Data Collection and Usage</h3>
                      <p>
                        The company collects extensive data including your personal information,
                        device information, browsing history, location data, and interactions with the platform.
                        This data is used for personalization, advertising, platform improvement, and research.
                      </p>

                      <h3>Data Sharing</h3>
                      <p>
                        Your data may be shared with:
                      </p>
                      <ul>
                        <li>Advertising partners for targeted advertising</li>
                        <li>Analytics providers to measure performance</li>
                        <li>Service providers that support platform operations</li>
                        <li>Business partners for collaborative features</li>
                        <li>Law enforcement when legally required</li>
                      </ul>
                      <p>
                        <span className="text-red-600 font-medium">Important:</span> There is limited ability to opt out of most data sharing practices.
                      </p>

                      <h3>User Rights</h3>
                      <p>
                        You can access, correct, and delete certain personal information, but some data may be retained for
                        legitimate business purposes. Data portability options are limited.
                      </p>

                      <h3>Legal Terms</h3>
                      <p>
                        By using the service, you agree to:
                      </p>
                      <ul>
                        <li>Resolve disputes through mandatory arbitration rather than courts</li>
                        <li>Waive your right to participate in class action lawsuits</li>
                        <li>Accept that the company can modify terms at any time with minimal notice</li>
                        <li>Acknowledge that certain content you create may be used by the platform for promotion</li>
                      </ul>

                      <div className="flex justify-end mt-4">
                        <Link href="#" className="text-[#f6b90e] hover:underline inline-flex items-center">
                          View Full Terms
                          <ExternalLink className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-sm text-gray-600">Was this summary helpful?</p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        Yes
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <ThumbsDown className="h-4 w-4" />
                        No
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
