"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Download, Share2, ExternalLink, Info } from "lucide-react";

// Mock data for sample apps - this would come from your API or database
const SAMPLE_APPS = [
  {
    id: "1",
    name: "Social Connect",
    category: "Social Media",
    lastUpdated: "March 2025",
    data: {
      dataUsage: {
        dataCollection: "High",
        thirdPartySharing: "Yes",
        dataStorage: "Cloud",
        retentionPeriod: "12 months"
      },
      permissions: {
        camera: "Required",
        location: "Required",
        contacts: "Required",
        microphone: "Required",
        notifications: "Required",
        systemPreferences: "Required"
      },
      subscriptionDetails: {
        cost: "$4.99/month",
        inAppPurchases: "Yes"
      },
      personalDetails: {
        age: "Required",
        userProfile: "Name, Email, Date of Birth, Phone Number"
      },
      privacy: {
        encryption: "Partial",
        userDataControl: "Limited",
        adTracking: "Extensive",
        thirdPartyAccess: "Multiple Partners"
      },
      termsConditions: {
        readingTime: "42 minutes",
        readabilityScore: "College Level (Difficult)",
        linkToFull: "https://example.com/terms"
      }
    }
  },
  {
    id: "2",
    name: "CloudStorage Pro",
    category: "Productivity",
    lastUpdated: "March 2025",
    data: {
      dataUsage: {
        dataCollection: "Medium",
        thirdPartySharing: "Limited",
        dataStorage: "Encrypted Cloud",
        retentionPeriod: "Until account deletion"
      },
      permissions: {
        camera: "Optional",
        location: "Not Used",
        contacts: "Optional",
        microphone: "Not Used",
        notifications: "Optional",
        systemPreferences: "Limited"
      },
      subscriptionDetails: {
        cost: "$9.99/month",
        inAppPurchases: "No"
      },
      personalDetails: {
        age: "Optional",
        userProfile: "Email only"
      },
      privacy: {
        encryption: "End-to-end",
        userDataControl: "Comprehensive",
        adTracking: "Minimal",
        thirdPartyAccess: "Limited"
      },
      termsConditions: {
        readingTime: "28 minutes",
        readabilityScore: "College Level (Moderate)",
        linkToFull: "https://example.com/terms"
      }
    }
  },
  {
    id: "3",
    name: "QuickChat",
    category: "Messaging",
    lastUpdated: "February 2025",
    data: {
      dataUsage: {
        dataCollection: "Medium",
        thirdPartySharing: "Limited",
        dataStorage: "Device & Cloud",
        retentionPeriod: "Message dependent"
      },
      permissions: {
        camera: "Optional",
        location: "Optional",
        contacts: "Required",
        microphone: "Required",
        notifications: "Required",
        systemPreferences: "Limited"
      },
      subscriptionDetails: {
        cost: "Free",
        inAppPurchases: "Yes"
      },
      personalDetails: {
        age: "Required",
        userProfile: "Phone Number, Name (optional)"
      },
      privacy: {
        encryption: "Transit only",
        userDataControl: "Moderate",
        adTracking: "Moderate",
        thirdPartyAccess: "Analytics partners"
      },
      termsConditions: {
        readingTime: "35 minutes",
        readabilityScore: "College Level (Moderate)",
        linkToFull: "https://example.com/terms"
      }
    }
  },
  {
    id: "4",
    name: "Weather Tracker",
    category: "Utilities",
    lastUpdated: "January 2025",
    data: {
      dataUsage: {
        dataCollection: "Low",
        thirdPartySharing: "No",
        dataStorage: "Device & Cloud",
        retentionPeriod: "30 days"
      },
      permissions: {
        camera: "Not Used",
        location: "Required",
        contacts: "Not Used",
        microphone: "Not Used",
        notifications: "Optional",
        systemPreferences: "Minimal"
      },
      subscriptionDetails: {
        cost: "Free with ads / $2.99 premium",
        inAppPurchases: "Yes"
      },
      personalDetails: {
        age: "Not Required",
        userProfile: "None required"
      },
      privacy: {
        encryption: "Standard",
        userDataControl: "Full",
        adTracking: "Optional",
        thirdPartyAccess: "Weather data providers only"
      },
      termsConditions: {
        readingTime: "15 minutes",
        readabilityScore: "High School Level (Easy)",
        linkToFull: "https://example.com/terms"
      }
    }
  },
  {
    id: "5",
    name: "FitnessPlus",
    category: "Health",
    lastUpdated: "March 2025",
    data: {
      dataUsage: {
        dataCollection: "High",
        thirdPartySharing: "Extensive",
        dataStorage: "Cloud",
        retentionPeriod: "Indefinite"
      },
      permissions: {
        camera: "Optional",
        location: "Required",
        contacts: "Optional",
        microphone: "Not Used",
        notifications: "Required",
        systemPreferences: "Extensive"
      },
      subscriptionDetails: {
        cost: "$7.99/month",
        inAppPurchases: "Yes"
      },
      personalDetails: {
        age: "Required",
        userProfile: "Name, Email, Height, Weight, Health Data"
      },
      privacy: {
        encryption: "Basic",
        userDataControl: "Limited",
        adTracking: "Extensive",
        thirdPartyAccess: "Health partners, advertisers"
      },
      termsConditions: {
        readingTime: "45 minutes",
        readabilityScore: "College Level (Difficult)",
        linkToFull: "https://example.com/terms"
      }
    }
  }
];

export default function NutritionLabelDetail() {
  const params = useParams();
  const id = params.id as string;
  const [activeTab, setActiveTab] = useState("current");

  // Find the app data based on the ID
  const app = SAMPLE_APPS.find(app => app.id === id);

  if (!app) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <div className="umbc-container py-12 text-center">
            <h1 className="text-3xl font-bold mb-4">App Not Found</h1>
            <p className="mb-6">The requested application could not be found.</p>
            <Button asChild className="bg-[#f6b90e] hover:bg-[#e6ad0e] text-black">
              <Link href="/search">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Search
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="bg-[#f6b90e]/10 py-12">
          <div className="umbc-container">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <Link href="/search" className="text-[#f6b90e] hover:underline inline-flex items-center mb-2">
                  <ChevronLeft className="mr-1 h-4 w-4" />
                  Back to Search
                </Link>
                <h1 className="text-3xl md:text-4xl font-bold">{app.name}</h1>
                <p className="text-lg text-gray-600">{app.category}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="bg-white">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
                <Button variant="outline" size="sm" className="bg-white">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="umbc-container py-12">
          <Tabs defaultValue="current" className="w-full" onValueChange={(value) => setActiveTab(value)}>
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="current">Current Version</TabsTrigger>
              <TabsTrigger value="history">Version History</TabsTrigger>
              <TabsTrigger value="details">Certification Details</TabsTrigger>
            </TabsList>

            <TabsContent value="current">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle>Certification Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mr-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-green-600"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-green-700">Certified</h3>
                          <p className="text-sm text-gray-500">Last updated: {app.lastUpdated}</p>
                        </div>
                      </div>
                      <p className="text-sm">
                        This application has been reviewed and certified by the UMBC Ethical Software Lab for transparency
                        in its data practices and terms of service.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Understanding This Label</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-sm max-w-none">
                      <p>
                        Our Digital Nutrition Labels provide a clear, standardized format for understanding how applications
                        use your data and what permissions they require.
                      </p>
                      <ul>
                        <li>
                          <strong>Required:</strong> The app cannot function without this permission or data.
                        </li>
                        <li>
                          <strong>Optional:</strong> The app can function without this, but some features may be limited.
                        </li>
                        <li>
                          <strong>Not Used:</strong> The app does not use or request this permission or data type.
                        </li>
                      </ul>
                      <p>
                        <Link href="#" className="text-[#f6b90e] hover:underline inline-flex items-center">
                          <Info className="mr-1 h-4 w-4" />
                          Learn more about our certification process
                        </Link>
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="lg:col-span-2">
                  <div className="nutrition-label">
                    <div className="nutrition-label-title">Digital Nutrition Facts</div>
                    <div className="text-center mb-2">Application: {app.name}</div>

                    <div className="nutrition-label-heading">Purchase Details</div>
                    <div className="nutrition-label-section">
                      <div className="nutrition-label-line">
                        <span>Subscription Cost:</span>
                        <span>{app.data.subscriptionDetails.cost}</span>
                      </div>
                      <div className="nutrition-label-line">
                        <span>In-App Purchases:</span>
                        <span>{app.data.subscriptionDetails.inAppPurchases}</span>
                      </div>
                    </div>

                    <div className="nutrition-label-heading">Personal Details</div>
                    <div className="nutrition-label-section">
                      <div className="nutrition-label-line">
                        <span>Age:</span>
                        <span>{app.data.personalDetails.age}</span>
                      </div>
                      <div className="nutrition-label-line">
                        <span>User Profile Information:</span>
                        <span>{app.data.personalDetails.userProfile}</span>
                      </div>
                    </div>

                    <div className="nutrition-label-heading">Data Collection and Sharing</div>
                    <div className="nutrition-label-section">
                      <div className="nutrition-label-line">
                        <span>Data Collection:</span>
                        <span>{app.data.dataUsage.dataCollection}</span>
                      </div>
                      <div className="nutrition-label-line">
                        <span>Third-Party Sharing:</span>
                        <span>{app.data.dataUsage.thirdPartySharing}</span>
                      </div>
                      <div className="nutrition-label-line">
                        <span>Data Storage:</span>
                        <span>{app.data.dataUsage.dataStorage}</span>
                      </div>
                      <div className="nutrition-label-line">
                        <span>Retention Period:</span>
                        <span>{app.data.dataUsage.retentionPeriod}</span>
                      </div>
                    </div>

                    <div className="nutrition-label-heading">Login Information</div>
                    <div className="nutrition-label-section">
                      <div className="nutrition-label-line">
                        <span>Camera Access:</span>
                        <span>{app.data.permissions.camera}</span>
                      </div>
                      <div className="nutrition-label-line">
                        <span>Location Access:</span>
                        <span>{app.data.permissions.location}</span>
                      </div>
                      <div className="nutrition-label-line">
                        <span>Contacts:</span>
                        <span>{app.data.permissions.contacts}</span>
                      </div>
                      <div className="nutrition-label-line">
                        <span>Microphone:</span>
                        <span>{app.data.permissions.microphone}</span>
                      </div>
                      <div className="nutrition-label-line">
                        <span>Notifications:</span>
                        <span>{app.data.permissions.notifications}</span>
                      </div>
                      <div className="nutrition-label-line">
                        <span>System Preferences:</span>
                        <span>{app.data.permissions.systemPreferences}</span>
                      </div>
                    </div>

                    <div className="nutrition-label-heading">Privacy Features</div>
                    <div className="nutrition-label-section">
                      <div className="nutrition-label-line">
                        <span>Encryption:</span>
                        <span>{app.data.privacy.encryption}</span>
                      </div>
                      <div className="nutrition-label-line">
                        <span>User Data Control:</span>
                        <span>{app.data.privacy.userDataControl}</span>
                      </div>
                      <div className="nutrition-label-line">
                        <span>Ad Tracking:</span>
                        <span>{app.data.privacy.adTracking}</span>
                      </div>
                      <div className="nutrition-label-line">
                        <span>Third-Party Access:</span>
                        <span>{app.data.privacy.thirdPartyAccess}</span>
                      </div>
                    </div>

                    <div className="nutrition-label-heading">Terms &amp; Conditions</div>
                    <div className="nutrition-label-section mb-2">
                      <div className="nutrition-label-line">
                        <span>Reading Time:</span>
                        <span>{app.data.termsConditions.readingTime}</span>
                      </div>
                      <div className="nutrition-label-line">
                        <span>Readability Score:</span>
                        <span>{app.data.termsConditions.readabilityScore}</span>
                      </div>
                      <div className="nutrition-label-line">
                        <span>Full Terms:</span>
                        <Link href={app.data.termsConditions.linkToFull} target="_blank" className="text-[#f6b90e] hover:underline inline-flex items-center">
                          View <ExternalLink className="ml-1 h-3 w-3" />
                        </Link>
                      </div>
                    </div>

                    <div className="text-xs text-center mt-4">
                      Certified by UMBC Ethical Software Lab<br />
                      Last updated: {app.lastUpdated}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="history">
              <Card>
                <CardHeader>
                  <CardTitle>Version History</CardTitle>
                  <CardDescription>
                    View and compare different versions of this application's Digital Nutrition Label.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="p-4 border rounded-md">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">Current Version - {app.lastUpdated}</h3>
                        <Badge variant="outline">Latest</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Changes from previous version:
                      </p>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Updated data retention policy</li>
                        <li>Modified third-party sharing agreements</li>
                        <li>Added new permission requirements</li>
                      </ul>
                      <div className="mt-4">
                        <Button variant="outline" size="sm">View This Version</Button>
                      </div>
                    </div>

                    <div className="p-4 border rounded-md opacity-75">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">December 2024</h3>
                        <Badge variant="outline" className="bg-gray-100">Previous</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Changes from previous version:
                      </p>
                      <ul className="list-disc pl-5 text-sm space-y-1">
                        <li>Updated terms of service</li>
                        <li>Changed data encryption standards</li>
                      </ul>
                      <div className="mt-4">
                        <Button variant="outline" size="sm">View This Version</Button>
                      </div>
                    </div>

                    <div className="p-4 border rounded-md opacity-75">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">September 2024</h3>
                        <Badge variant="outline" className="bg-gray-100">Previous</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Initial certification version
                      </p>
                      <div className="mt-4">
                        <Button variant="outline" size="sm">View This Version</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="details">
              <Card>
                <CardHeader>
                  <CardTitle>Certification Process Details</CardTitle>
                  <CardDescription>
                    Learn about how this application was certified by the UMBC Ethical Software Lab.
                  </CardDescription>
                </CardHeader>
                <CardContent className="prose max-w-none">
                  <h3>Methodology</h3>
                  <p>
                    Our certification process involves both automated and manual analysis of an application's data practices,
                    privacy policies, and terms of service. We evaluate multiple aspects:
                  </p>
                  <ul>
                    <li>Static code analysis to identify data collection points</li>
                    <li>Network traffic analysis to verify data transmission practices</li>
                    <li>Natural language processing of terms of service and privacy policies</li>
                    <li>Manual review by privacy experts and legal analysts</li>
                  </ul>

                  <h3>Certification Criteria</h3>
                  <p>
                    Applications receive certification when they meet our standards for transparency, not necessarily for
                    having the most privacy-friendly practices. Our goal is to help users make informed choices based on
                    clear information.
                  </p>
                  <p>
                    Key certification requirements include:
                  </p>
                  <ul>
                    <li>Clear disclosure of all data collection practices</li>
                    <li>Transparency about third-party sharing</li>
                    <li>Readable and understandable terms of service</li>
                    <li>Appropriate security measures for the type of data collected</li>
                    <li>User controls for privacy preferences</li>
                  </ul>

                  <h3>Recertification Process</h3>
                  <p>
                    Applications are re-evaluated when significant changes are made to their privacy practices, terms of
                    service, or data handling procedures. We also conduct periodic reviews to ensure continued compliance.
                  </p>

                  <div className="not-prose mt-6">
                    <Button asChild className="bg-[#f6b90e] hover:bg-[#e6ad0e] text-black">
                      <Link href="/about">
                        Learn More About Our Lab
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}
