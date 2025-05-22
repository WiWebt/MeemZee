import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | MeemZee",
  description: "Terms and conditions for using MeemZee's services",
};

export default function TermsPage() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <div className="prose prose-base max-w-none text-gray-900">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-3">
              Terms &amp; Conditions
            </h1>
            <p className="text-sm text-gray-700 inline-flex items-center justify-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Last updated: January 31, 2025
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 mb-6">
            <p className="text-gray-900 leading-relaxed text-base">
              Welcome to MeemZee! These Terms and Conditions (&ldquo;Terms&rdquo;) govern your access to and use of our services, 
              including our baby products store, home & kitchen store, price tracking features, and utility tools (collectively, &ldquo;Services&rdquo;). 
              By using our Services, you agree to be bound by these Terms. If you do not agree, do not use our Services.
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
                <span className="bg-blue-50 text-blue-600 rounded-full w-7 h-7 flex items-center justify-center mr-3 text-base">1</span>
                Use of Services
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1.1 Service Description</h3>
                  <p className="text-gray-700 text-base">
                    MeemZee provides multiple services including: (a) A curated baby products store with affiliate links, 
                    (b) Home, kitchen & decor products marketplace, (c) Price tracking and comparison tools, and 
                    (d) Free utility tools including video downloaders and file converters.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1.2 Affiliate Links</h3>
                  <p className="text-gray-700 text-base">
                    Our product listings contain affiliate links. By clicking these links and making purchases, you acknowledge 
                    that MeemZee may earn a commission without any additional cost to you.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1.3 Utility Tools Usage</h3>
                  <p className="text-gray-700 text-base">
                    Our utility tools (including video downloaders and file converters) are provided for personal, non-commercial use. 
                    You are responsible for ensuring you have the right to download or convert any content using our tools.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1.4 Prohibited Activities</h3>
                  <ul className="list-none space-y-2 pl-0">
                    <li className="flex items-start">
                      <div className="bg-blue-50 p-1.5 rounded-lg mr-3 mt-1">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-base">Abuse or exploit our price tracking features</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-50 p-1.5 rounded-lg mr-3 mt-1">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-base">Use utility tools for commercial purposes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-50 p-1.5 rounded-lg mr-3 mt-1">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-base">Scrape or mass download content from our platform</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
                <span className="bg-blue-50 text-blue-600 rounded-full w-7 h-7 flex items-center justify-center mr-3 text-base">2</span>
                Payment and Subscriptions
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2.1 Subscription Plans</h3>
                  <p className="text-gray-700 text-base">
                    MeemZee offers a free tier and paid subscription tiers. Paid plans auto-renew unless canceled before 
                    the renewal date.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2.2 Refunds</h3>
                  <p className="text-gray-700 text-base">
                    Refunds are provided at MeemZee&apos;s discretion, as required by applicable law.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
                <span className="bg-blue-50 text-blue-600 rounded-full w-7 h-7 flex items-center justify-center mr-3 text-base">3</span>
                Product Information & Pricing
              </h2>
              <p className="text-gray-700 text-base">
                While we strive to provide accurate product information and pricing, prices and availability are subject to change. 
                Our price tracking feature is provided as-is, and we do not guarantee the accuracy or timeliness of price updates. 
                All purchases are made through third-party retailers, and we are not responsible for the fulfillment of orders.
              </p>
            </section>

            <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
                <span className="bg-blue-50 text-blue-600 rounded-full w-7 h-7 flex items-center justify-center mr-3 text-base">4</span>
                Disclaimer of Warranties
              </h2>
              <p className="text-gray-700 text-base">
                MeemZee provides the Services &ldquo;as is&rdquo; and does not guarantee uninterrupted or error-free service.
              </p>
            </section>

            <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
                <span className="bg-blue-50 text-blue-600 rounded-full w-7 h-7 flex items-center justify-center mr-3 text-base">5</span>
                Limitation of Liability
              </h2>
              <p className="text-gray-700 text-base">
                To the fullest extent permitted by law, MeemZee will not be liable for any indirect, incidental, or 
                consequential damages arising from your use of the Services.
              </p>
            </section>

            <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
                <span className="bg-blue-50 text-blue-600 rounded-full w-7 h-7 flex items-center justify-center mr-3 text-base">6</span>
                Modifications to the Terms
              </h2>
              <p className="text-gray-700 text-base">
                We reserve the right to update these Terms at any time. Continued use of the Services after changes 
                are made constitutes your acceptance of the revised Terms.
              </p>
            </section>

            <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
                <span className="bg-blue-50 text-blue-600 rounded-full w-7 h-7 flex items-center justify-center mr-3 text-base">7</span>
                Contact Us
              </h2>
              <p className="text-gray-700 text-base">
                If you have any questions about these Terms, contact us at{" "}
                <a 
                  href="mailto:support@meemzee.com" 
                  className="text-primary-600 hover:text-primary-500 underline"
                >
                  support@meemzee.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
