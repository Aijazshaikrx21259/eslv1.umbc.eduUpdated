"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

// Define theme type
type LabelTheme = 'standard' | 'dark' | 'colorful';

export default function CompareNutritionLabelsPage() {
  const [labelTheme, setLabelTheme] = useState<LabelTheme>('standard');
  const { toast } = useToast();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-[#fffbea]">
        <div className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Compare Digital Nutrition Labels</h1>
            <p className="text-lg">
              Upload two different software nutrition label files to compare their data usage, privacy policies, and permissions side by side.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 pb-12">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-bold mb-6">Coming Soon: Enhanced Privacy Metrics Visualization</h2>
            <p className="mb-4">
              We&apos;re currently building an enhanced comparison tool with data visualization features that will allow you to:
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-6">
              <li>Compare apps side-by-side with interactive radar charts</li>
              <li>See bar charts of privacy metrics for easy comparison</li>
              <li>Identify key differences and their privacy implications</li>
              <li>Get quantitative privacy scores for objective comparisons</li>
            </ul>
            <p>
              Check back soon for this updated feature. In the meantime, you can generate individual nutrition labels
              on our <Link href="/nutrition-label" className="text-[#f6b90e] hover:underline">main page</Link>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
