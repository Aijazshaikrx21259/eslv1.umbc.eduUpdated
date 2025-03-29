"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="umbc-container py-10">
        <div className="flex flex-col lg:flex-row justify-between mb-12">
          <div className="mb-8 lg:mb-0">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-2xl font-bold text-[#f6b90e]">UMBC</span>
            </Link>
            <p className="text-sm text-gray-300 mb-1">
              University of Maryland, Baltimore County
            </p>
            <p className="text-sm text-gray-300 mb-4">
              1000 Hilltop Circle, Baltimore, MD 21250
            </p>
            <div className="flex items-center mb-4">
              <Link href="https://umbc.edu/about/visit/directions/" className="text-sm text-[#f6b90e] hover:underline">
                Directions & Parking Information
              </Link>
            </div>

            <div className="flex space-x-3">
              <Link href="https://facebook.com/umbcpage" target="_blank" className="text-white hover:text-[#f6b90e]">
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link href="https://twitter.com/umbc" target="_blank" className="text-white hover:text-[#f6b90e]">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="https://www.instagram.com/umbclife" target="_blank" className="text-white hover:text-[#f6b90e]">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Link>
              <Link href="https://www.youtube.com/user/UMBCtube" target="_blank" className="text-white hover:text-[#f6b90e]">
                <span className="sr-only">YouTube</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                  <path d="m10 15 5-3-5-3z"></path>
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:w-2/3">
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="https://www.alumni.umbc.edu/" className="text-gray-300 hover:text-[#f6b90e]">Alumni</Link></li>
                <li><Link href="https://careers.umbc.edu/" className="text-gray-300 hover:text-[#f6b90e]">Career Center</Link></li>
                <li><Link href="https://my.umbc.edu/events" className="text-gray-300 hover:text-[#f6b90e]">Events</Link></li>
                <li><Link href="https://help.umbc.edu/" className="text-gray-300 hover:text-[#f6b90e]">Get Help</Link></li>
                <li><Link href="https://news.umbc.edu/" className="text-gray-300 hover:text-[#f6b90e]">News</Link></li>
                <li><Link href="https://about.umbc.edu/visitors-guide/" className="text-gray-300 hover:text-[#f6b90e]">Visit Campus</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Important Contacts</h3>
              <ul className="space-y-2">
                <li><Link href="https://www.umbc.edu/search/directory/" className="text-gray-300 hover:text-[#f6b90e]">Online Directory</Link></li>
                <li><Link href="https://about.umbc.edu/contact-us/" className="text-gray-300 hover:text-[#f6b90e]">Contact UMBC</Link></li>
                <li><Link href="https://my.umbc.edu/go/doit-help" className="text-gray-300 hover:text-[#f6b90e]">Request Support</Link></li>
              </ul>

              <h3 className="text-lg font-semibold mb-4 mt-6">Emergency Info</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Link href="https://police.umbc.edu/" className="text-gray-300 hover:text-[#f6b90e]">UMBC Police:</Link>
                  <Link href="tel:410-455-5555" className="text-[#f6b90e] hover:underline ml-2">410-455-5555</Link>
                </li>
                <li><Link href="https://umbc.omnilert.net/subscriber.php" className="text-gray-300 hover:text-[#f6b90e]">Sign Up for Text Alerts</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Ethical Software Lab</h3>
              <p className="text-sm text-gray-300 mb-4">
                We are located on the fourth floor of the College of Engineering and IT (COEIT) in ITE 454.
              </p>
              <p className="text-sm text-gray-300 mb-2">
                For inquiries, support, or more information, please contact us at:
              </p>
              <Link href="mailto:esl@umbc.edu" className="text-[#f6b90e] hover:underline block mb-1">esl@umbc.edu</Link>
              <Link href="mailto:eslresearch-support@proton.me" className="text-[#f6b90e] hover:underline block">eslresearch-support@proton.me</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="umbc-container py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} UMBC: A <Link href="https://www.usmd.edu" className="text-[#f6b90e] hover:underline">University System of Maryland</Link> Member Institution
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="https://about.umbc.edu/accreditation/" className="text-gray-400 hover:text-[#f6b90e]">Accreditation</Link>
              <Link href="https://oei.umbc.edu/discrimination-policy/" className="text-gray-400 hover:text-[#f6b90e]">Equal Opportunity</Link>
              <Link href="https://privacy.umbc.edu/" className="text-gray-400 hover:text-[#f6b90e]">Privacy</Link>
              <Link href="https://oei.umbc.edu/gender-discrimination-sexual-misconduct/" className="text-gray-400 hover:text-[#f6b90e]">Title IX</Link>
              <Link href="https://accessibility.umbc.edu/digital-content-accessibility/website-accessibility-at-umbc/" className="text-gray-400 hover:text-[#f6b90e]">Web Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
