import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="bg-[#f6b90e]/10 py-12">
          <div className="umbc-container">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About UMBC Ethical Software Lab</h1>
            <p className="text-lg mb-8 max-w-3xl">
              Learn about our mission, team, and approach to software ethics certification.
            </p>
          </div>
        </div>

        <div className="umbc-container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="mb-4">
                  Welcome to the forefront of ethical computing. The UMBC Ethical Software Lab (ESL) dedicates itself to
                  pioneering research and development in the certification of software ethics. Our vision is clear: to assure
                  users worldwide that the software they rely on is not only functional but ethically sound, respecting their
                  rights and privacy without compromise.
                </p>
                <p className="mb-4">
                  The lab will give users and thus the general public confidence that software is doing only what is intended
                  and also to know their rights and privacy under the terms of service. As an independent certification mechanism
                  housed within UMBC, a public university, tests will be made to software and hardware independent of
                  considerations for profit or reputation.
                </p>
                <p>
                  Terms of service agreements will be decoded and summarized for ease of understanding so users can quickly
                  understand what privacy they may be giving up and can make informed choices. These steps will ensure transparent
                  ethics are applied evenly in the computing industry on behalf of all users, which is critical to personal
                  cybersecurity as well as cybersecurity to the public as devices are increasingly linked.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">The Problem We're Solving</h2>
                <p className="mb-4">
                  Off-loading the reading and interpretation of the terms and conditions agreement to the end user is an ethical
                  issue and a burden that companies are off-loading to end users. This presents a problem to all users, particularly
                  users of underserved communities and busy families and individuals.
                </p>
                <p className="mb-4">
                  In a 2020 article by USA Today, ProPrivacy.com, a digital privacy group, asked participants to take a survey
                  and agree to terms and conditions that included mischievous clauses including giving your mom permission to
                  review your browsing history, handing over the naming rights to your first-born child, and granting drones
                  access to the airspace over their home.
                </p>
                <p className="mb-4">
                  Only 19 out of 100 users clicked through to the terms and conditions page and only 1 out of 100 people actually
                  read it to realize what they were about to agree to.
                </p>
                <p>
                  Our lab aims to address this critical issue by creating tools that make it easier for users to understand
                  the implications of the software they use and the agreements they accept.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
                <p className="mb-4">
                  The UMBC Ethical Software Lab takes a multi-faceted approach to software ethics certification:
                </p>
                <ol className="list-decimal pl-5 space-y-2 mb-4">
                  <li>
                    <strong>Digital Nutrition Labels:</strong> We create easy-to-understand labels for software applications,
                    similar to food nutrition labels, that summarize key privacy and data usage information.
                  </li>
                  <li>
                    <strong>Terms of Service Decoder:</strong> Our system analyzes complex legal documents and presents the
                    information in plain language that users can understand.
                  </li>
                  <li>
                    <strong>Ethical Certification:</strong> We provide independent certification of software applications based
                    on rigorous testing and evaluation of their privacy practices, data handling, and user rights.
                  </li>
                  <li>
                    <strong>Research and Development:</strong> Our team conducts ongoing research to improve methods for
                    evaluating software ethics and creating tools that empower users.
                  </li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">Institutional Backing</h2>
                <p className="mb-4">
                  The Ethical Software Lab is housed within the College of Engineering and Information Technology at the
                  University of Maryland, Baltimore County (UMBC). As part of a public research university, we maintain
                  independence from commercial interests, ensuring our evaluations and certifications are unbiased and focused
                  solely on user rights and privacy.
                </p>
                <p>
                  Our work is supported by faculty experts in cybersecurity, human-computer interaction, data privacy, and
                  ethics, as well as graduate and undergraduate researchers committed to advancing the field of ethical computing.
                </p>
              </section>
            </div>

            <div className="lg:col-span-1 space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <p className="mb-4">
                  We are located on the fourth floor of the College of Engineering and IT (COEIT) in ITE 454.
                </p>
                <h4 className="font-semibold mb-2">Email</h4>
                <p className="mb-4">
                  <Link href="mailto:esl@umbc.edu" className="text-[#f6b90e] hover:underline">esl@umbc.edu</Link>
                  <br />
                  <Link href="mailto:eslresearch-support@proton.me" className="text-[#f6b90e] hover:underline">eslresearch-support@proton.me</Link>
                </p>
                <h4 className="font-semibold mb-2">Address</h4>
                <p>
                  University of Maryland, Baltimore County<br />
                  1000 Hilltop Circle, Baltimore, MD 21250<br />
                  Information Technology & Engineering Building, Room 454
                </p>
              </div>

              <div className="bg-black p-6 rounded-lg text-white">
                <h3 className="text-xl font-bold mb-4">Get Involved</h3>
                <p className="mb-4">
                  We welcome participation from students, faculty, industry partners, and community members interested in
                  advancing software ethics.
                </p>
                <Button asChild className="w-full bg-[#f6b90e] hover:bg-[#e6ad0e] text-black">
                  <Link href="/contact">
                    Contact Us to Participate
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-4">Resources</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="https://www.usatoday.com/story/tech/2020/01/28/not-reading-the-small-print-is-privacy-policy-fail/4565274002/"
                      target="_blank"
                      className="text-[#f6b90e] hover:underline"
                    >
                      USA Today: Not reading the small print is privacy policy fail
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-[#f6b90e] hover:underline">
                      Digital Nutrition Label Guidelines
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-[#f6b90e] hover:underline">
                      Research Publications
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-[#f6b90e] hover:underline">
                      Certification Process
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
