"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, ArrowRight, ShieldCheck, AlertTriangle, InfoIcon } from "lucide-react";
import Link from "next/link";

// Mock data for sample apps
const SAMPLE_APPS = [
  {
    id: "1",
    name: "Social Connect",
    category: "Social Media",
    rating: "3.5/5",
    certification: "Certified",
    privacyScore: "Medium",
    dataUsage: "High",
    description: "A popular social media platform for connecting with friends and sharing content.",
    concerns: ["Third-party data sharing", "Limited user privacy controls"],
    strengths: ["Clear data export options", "Two-factor authentication"],
  },
  {
    id: "2",
    name: "CloudStorage Pro",
    category: "Productivity",
    rating: "4.2/5",
    certification: "Certified",
    privacyScore: "High",
    dataUsage: "Medium",
    description: "A cloud storage solution for documents and multimedia files.",
    concerns: ["Uses some trackers for analytics"],
    strengths: ["End-to-end encryption", "GDPR compliant", "Minimal data collection"],
  },
  {
    id: "3",
    name: "QuickChat",
    category: "Messaging",
    rating: "3.8/5",
    certification: "Pending",
    privacyScore: "Medium",
    dataUsage: "Medium",
    description: "Instant messaging app for personal and group conversations.",
    concerns: ["Contact list access required", "Message metadata stored"],
    strengths: ["Messages encrypted in transit", "Optional anonymous mode"],
  },
  {
    id: "4",
    name: "Weather Tracker",
    category: "Utilities",
    rating: "4.5/5",
    certification: "Certified",
    privacyScore: "High",
    dataUsage: "Low",
    description: "Real-time weather forecasting app with personalized alerts.",
    concerns: ["Location data collected"],
    strengths: ["Minimal data collection", "Clear privacy policy", "No third-party sharing"],
  },
  {
    id: "5",
    name: "FitnessPlus",
    category: "Health",
    rating: "3.9/5",
    certification: "Not Certified",
    privacyScore: "Low",
    dataUsage: "High",
    description: "Fitness tracking and workout planning application.",
    concerns: ["Health data sharing with third parties", "Unclear data retention policy", "Excessive permissions"],
    strengths: ["Allows data deletion", "Offline mode available"],
  }
];

type FilterOption = "All" | "Certified" | "Not Certified" | "Pending";
type CategoryType = "All" | "Social Media" | "Productivity" | "Messaging" | "Utilities" | "Health";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [certificationFilter, setCertificationFilter] = useState<FilterOption>("All");
  const [categoryFilter, setCategoryFilter] = useState<CategoryType>("All");
  const [filteredApps, setFilteredApps] = useState(SAMPLE_APPS);

  // Apply filters when any filter changes
  useEffect(() => {
    const filtered = SAMPLE_APPS.filter(app => {
      // Search term filter
      const matchesSearch =
        searchTerm === "" ||
        app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.category.toLowerCase().includes(searchTerm.toLowerCase());

      // Certification filter
      const matchesCertification =
        certificationFilter === "All" ||
        app.certification === certificationFilter;

      // Category filter
      const matchesCategory =
        categoryFilter === "All" ||
        app.category === categoryFilter;

      return matchesSearch && matchesCertification && matchesCategory;
    });

    setFilteredApps(filtered);
  }, [searchTerm, certificationFilter, categoryFilter]);

  // Handle search input
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle category filter change
  const handleCategoryChange = (category: CategoryType) => {
    setCategoryFilter(
      categoryFilter === category ? "All" : category
    );
  };

  // Apply all filters
  const handleApplyFilters = () => {
    // Filters are already applied through useEffect, this just acts as a re-trigger
    console.log("Applying filters");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="bg-[#fffbea] py-12">
          <div className="umbc-container">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Search Applications</h1>
            <p className="text-lg mb-8 max-w-3xl">
              Find software applications and services to view their ethical certification status and digital nutrition labels.
            </p>
          </div>
        </div>

        <div className="umbc-container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-lg border border-gray-200 p-5">
                <h2 className="text-xl font-bold mb-4">Filters</h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold mb-2">Certification Status</h3>
                    <div className="space-y-2">
                      {["All", "Certified", "Not Certified", "Pending"].map((option) => (
                        <label
                          key={option}
                          className={`flex items-center space-x-2 cursor-pointer py-1 px-2 rounded-md ${certificationFilter === option ? 'bg-[#f6b90e]/20' : 'hover:bg-gray-100'}`}
                        >
                          <input
                            type="radio"
                            name="certification"
                            checked={certificationFilter === option}
                            onChange={() => setCertificationFilter(option as FilterOption)}
                            className="text-[#f6b90e] focus:ring-[#f6b90e]"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold mb-2">Categories</h3>
                    <div className="space-y-2">
                      {["Social Media", "Productivity", "Messaging", "Utilities", "Health"].map((category) => (
                        <label
                          key={category}
                          className={`flex items-center space-x-2 cursor-pointer hover:bg-gray-100 py-1 px-2 rounded-md ${categoryFilter === category ? 'bg-[#f6b90e]/20' : ''}`}
                        >
                          <input
                            type="checkbox"
                            checked={categoryFilter === category}
                            onChange={() => handleCategoryChange(category as CategoryType)}
                            className="text-[#f6b90e] focus:ring-[#f6b90e]"
                          />
                          <span>{category}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <Button
                    className="w-full bg-[#f6b90e] hover:bg-[#e6ad0e] text-black mt-2"
                    onClick={handleApplyFilters}
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="relative mb-8">
                <Input
                  type="search"
                  placeholder="Search for applications..."
                  className="pl-10 w-full"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>

              <div className="mb-6 flex items-center justify-between">
                <p className="text-sm text-gray-600">{filteredApps.length} results found</p>
                <div className="flex items-center space-x-1">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select className="text-sm border-none focus:ring-0">
                    <option>Relevance</option>
                    <option>Privacy Rating: High to Low</option>
                    <option>Privacy Rating: Low to High</option>
                    <option>A-Z</option>
                  </select>
                </div>
              </div>

              <div className="space-y-6">
                {filteredApps.length > 0 ? (
                  filteredApps.map((app) => (
                    <Card key={app.id} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl">{app.name}</CardTitle>
                            <CardDescription>{app.category}</CardDescription>
                          </div>
                          <div>
                            {app.certification === "Certified" && (
                              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">
                                <ShieldCheck className="h-3.5 w-3.5 mr-1" />
                                Certified
                              </Badge>
                            )}
                            {app.certification === "Not Certified" && (
                              <Badge className="bg-red-100 text-red-800 hover:bg-red-200">
                                <AlertTriangle className="h-3.5 w-3.5 mr-1" />
                                Not Certified
                              </Badge>
                            )}
                            {app.certification === "Pending" && (
                              <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                                <InfoIcon className="h-3.5 w-3.5 mr-1" />
                                Pending
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Privacy Score</p>
                            <div className="flex items-center">
                              <span className={`text-sm font-semibold ${
                                app.privacyScore === "High" ? "text-green-600" :
                                app.privacyScore === "Medium" ? "text-yellow-600" :
                                "text-red-600"
                              }`}>
                                {app.privacyScore}
                              </span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Data Usage</p>
                            <div className="flex items-center">
                              <span className={`text-sm font-semibold ${
                                app.dataUsage === "Low" ? "text-green-600" :
                                app.dataUsage === "Medium" ? "text-yellow-600" :
                                "text-red-600"
                              }`}>
                                {app.dataUsage}
                              </span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Rating</p>
                            <div className="flex items-center">
                              <span className="text-sm font-semibold">{app.rating}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-sm mb-4">{app.description}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-xs font-semibold text-red-600 mb-1">Privacy Concerns</p>
                            <ul className="text-xs space-y-1">
                              {app.concerns.map((concern, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="mr-1.5 mt-0.5 text-red-600">•</span>
                                  {concern}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-green-600 mb-1">Privacy Strengths</p>
                            <ul className="text-xs space-y-1">
                              {app.strengths.map((strength, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="mr-1.5 mt-0.5 text-green-600">•</span>
                                  {strength}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="flex justify-end">
                          <Button asChild variant="link" className="text-[#f6b90e] hover:text-[#e6ad0e] p-0">
                            <Link href={`/nutrition-label/${app.id}`}>
                              View Digital Nutrition Label
                              <ArrowRight className="h-4 w-4 ml-1" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
                    <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
