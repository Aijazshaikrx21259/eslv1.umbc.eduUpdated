import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";

// Ensure dynamic rendering for this page
export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#f6b90e] py-20">
          <div className="max-w-5xl mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">
              Welcome to the UMBC Ethical Software Lab
            </h1>
            <p className="text-lg md:text-xl text-black mb-10">
              Pioneering research and development in the certification of software ethics, ensuring
              the software you rely on is not only functional but ethically sound.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/nutrition-label" className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded font-medium">
                View Digital Nutrition Label
                <ChevronRight className="inline ml-1 h-4 w-4" />
              </Link>
              <Link href="/search" className="bg-white text-black border border-black px-6 py-3 rounded font-medium hover:bg-black hover:text-white">
                Search Applications
                <ChevronRight className="inline ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Digital Nutrition Labels for Software</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Just as food nutrition labels help you make informed dietary choices, our Digital Nutrition Labels
                help you understand the privacy and data implications of the software you use.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Terms of Service Card */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all bg-white">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-amber-100 p-3">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 text-amber-600" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 2V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                      <path d="M16 2V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                      <path d="M3.5 9.08984H20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
                      <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M15.6937 13.7H15.7027" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M15.6937 16.7H15.7027" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M11.9945 13.7H12.0035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M11.9945 16.7H12.0035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M8.29529 13.7H8.30426" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M8.29529 16.7H8.30426" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Terms of Service Decoder</h3>
                <p className="text-gray-600 mb-4 text-center">
                  Our tools decode and summarize dense Terms of Service agreements, making it easy to understand what you're agreeing to.
                </p>
                <div className="text-center">
                  <Link href="/terms-decoder" className="text-[#f6b90e] font-medium hover:underline">
                    Try the ToS Decoder →
                  </Link>
                </div>
              </div>

              {/* Digital Nutrition Label Card */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all bg-white">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-amber-100 p-3">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 text-amber-600" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M2.67004 18.9501L7.60004 15.6401C8.39004 15.1101 9.53004 15.1701 10.24 15.7801L10.57 16.0701C11.35 16.7401 12.61 16.7401 13.39 16.0701L17.55 12.5001C18.33 11.8301 19.59 11.8301 20.37 12.5001L22 13.9001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Digital Nutrition Label</h3>
                <p className="text-gray-600 mb-4 text-center">
                  Upload a text file with nutrition details to generate a structured digital nutrition label that clearly displays key information.
                </p>
                <div className="text-center">
                  <Link href="/nutrition-label" className="text-[#f6b90e] font-medium hover:underline">
                    Generate a Label →
                  </Link>
                </div>
              </div>

              {/* Application Search Card */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all bg-white">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-amber-100 p-3">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 text-amber-600" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M22 22L20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Application Search</h3>
                <p className="text-gray-600 mb-4 text-center">
                  Search for software applications to find their ethical certification and view their digital nutrition label information.
                </p>
                <div className="text-center">
                  <Link href="/search" className="text-[#f6b90e] font-medium hover:underline">
                    Search Applications →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Vision Section with Did You Know? */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Our Vision */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-lg mb-4">
                  The lab will give users and the general public confidence that software is doing only what is intended and also to know their rights
                  and privacy under the terms of service.
                </p>
                <p className="text-lg mb-4">
                  As an independent certification mechanism housed within UMBC, a public university, tests will be made to software and hardware
                  independent of considerations for profit or reputation.
                </p>
                <p className="text-lg">
                  Terms of service agreements will be decoded and summarized for ease of understanding so users can quickly understand what privacy
                  they may be giving up and can make informed choices.
                </p>
              </div>

              {/* Did You Know? */}
              <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-bold mb-4">Did You Know?</h3>
                <p className="mb-4">
                  According to a 2020 study, only 1 out of 100 people actually read terms and conditions agreements before accepting them.
                </p>
                <p className="mb-4">
                  This allows companies to include problematic clauses that may compromise user privacy, data rights, and more.
                </p>
                <div className="mt-6">
                  <Link href="https://www.usatoday.com/story/tech/2020/01/28/not-reading-the-small-print-is-privacy-policy-fail/4565274002/"
                    target="_blank"
                    className="text-[#f6b90e] font-medium hover:underline"
                  >
                    Read the USA Today article →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black text-white">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-6">Join Us in This Crucial Step</h2>
            <p className="text-xl mb-8">
              Be part of our mission to create a more ethical digital world where users can make informed decisions about the software they use.
            </p>
            <Link href="/nutrition-label" className="bg-[#f6b90e] hover:bg-[#e6ad0e] text-black font-medium px-6 py-3 rounded inline-block">
              Try the Digital Nutrition Label →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
