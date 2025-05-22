import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | MeemZee",
  description: "Privacy policy for MeemZee's services",
};

export default function PrivacyPage() {
  return (
    <main className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <div className="prose prose-base max-w-none text-gray-900">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-3">
              Privacy Policy
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
              MeemZee Inc. (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) values your privacy. This Privacy Policy explains how we collect, use, and share personal information about you when you use our website and services. It also outlines your rights under the General Data Protection Regulation (GDPR) and other applicable laws.
            </p>
          </div>

          <div className="space-y-8">
            <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
                <span className="bg-blue-50 text-blue-600 rounded-full w-7 h-7 flex items-center justify-center mr-3 text-base">1</span>
                Information We Collect
              </h2>
              <p className="text-gray-900 mb-4 text-base">We collect the following types of personal information:</p>
              <ul className="list-none space-y-4 pl-0">
                <li className="flex items-start">
                  <div className="bg-blue-50 p-1.5 rounded-lg mr-3 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-gray-900 block mb-1 text-sm">Account Information</strong>
                    <span className="text-gray-700 text-sm">Name, email address, and account preferences when you register.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-50 p-1.5 rounded-lg mr-3 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-gray-900 block mb-1 text-sm">Usage Data</strong>
                    <span className="text-gray-700 text-sm">Information about your interactions with our services, such as browsing history and tool usage.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-50 p-1.5 rounded-lg mr-3 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-gray-900 block mb-1 text-sm">Technical Data</strong>
                    <span className="text-gray-700 text-sm">Device information, IP address, and browser type.</span>
                  </div>
                </li>
              </ul>
            </section>

            <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
                <span className="bg-blue-50 text-blue-600 rounded-full w-7 h-7 flex items-center justify-center mr-3 text-base">2</span>
                How We Use Your Information
              </h2>
              <p className="text-gray-900 mb-4 text-base">We use your information to:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Provide, maintain, and improve our services.
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Personalize your shopping and tool experience.
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Communicate with you about your account, updates, and marketing (if you&apos;ve opted in).
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Comply with legal obligations.
                </li>
              </ul>
            </section>

            <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
                <span className="bg-blue-50 text-blue-600 rounded-full w-7 h-7 flex items-center justify-center mr-3 text-base">3</span>
                Sharing Your Information
              </h2>
              <p className="text-gray-900 mb-4 text-base">We do not sell your personal information. We may share your data with third parties:</p>
              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">Service Providers</h3>
                  <p className="text-gray-700 text-sm">For hosting, analytics, and customer support.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">Legal Compliance</h3>
                  <p className="text-gray-700 text-sm">To comply with laws or respond to lawful requests.</p>
                </div>
              </div>
              <p className="text-gray-900 mt-4 text-base">
                We don&apos;t share your data with third parties unless required by law.
              </p>
            </section>

            <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
                <span className="bg-blue-50 text-blue-600 rounded-full w-7 h-7 flex items-center justify-center mr-3 text-base">4</span>
                Data Retention
              </h2>
              <p className="text-gray-900 text-base">
                We retain your personal information for as long as your account is active or as required for legal and business purposes. Upon account deletion, data will be permanently removed from our systems, subject to legal obligations.
              </p>
            </section>

            <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
                <span className="bg-blue-50 text-blue-600 rounded-full w-7 h-7 flex items-center justify-center mr-3 text-base">5</span>
                Your Rights Under GDPR
              </h2>
              <p className="text-gray-900 mb-4 text-base">If you are located in the European Union, you have the following rights:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">Access</h3>
                  <p className="text-gray-700 text-sm">Request a copy of your personal data.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">Rectification</h3>
                  <p className="text-gray-700 text-sm">Correct inaccurate or incomplete information.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">Erasure</h3>
                  <p className="text-gray-700 text-sm">Request the deletion of your personal data.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">Restriction</h3>
                  <p className="text-gray-700 text-sm">Limit the processing of your data.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">Portability</h3>
                  <p className="text-gray-700 text-sm">Receive your data in a machine-readable format.</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm">Objection</h3>
                  <p className="text-gray-700 text-sm">Object to data processing for specific purposes.</p>
                </div>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">How to Exercise Your Right to Be Forgotten</h3>
                <p className="text-gray-700 text-sm">
                  To request the deletion of your personal data, please log in to the app, go to{" "}
                  <a href="https://lang-gang.com/delete-account" className="text-blue-600 hover:text-blue-800 underline">
                    https://lang-gang.com/delete-account
                  </a>
                  . Once you submit the request, your account and personal data will be scheduled for deletion within 30 days. If you log back into your account during this time, your deletion request will be canceled.
                </p>
              </div>
            </section>

            <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
                <span className="bg-blue-50 text-blue-600 rounded-full w-7 h-7 flex items-center justify-center mr-3 text-base">6</span>
                Security Measures
              </h2>
              <p className="text-gray-900 mb-4 text-base">
                We implement technical and organizational measures to protect your data against unauthorized access, alteration, or destruction. These include:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Encryption of data in transit and at rest.
                </li>
                <li className="flex items-center">
                  <svg className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Access controls and regular security assessments.
                </li>
              </ul>
            </section>

            <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
                <span className="bg-blue-50 text-blue-600 rounded-full w-7 h-7 flex items-center justify-center mr-3 text-base">7</span>
                Updates to This Policy
              </h2>
              <p className="text-gray-900 text-base">
                We may update this Privacy Policy from time to time. The &ldquo;Last updated&ldquo; at the top of the policy indicates when it was last revised. We will notify you of significant changes via email or through our services.
              </p>
            </section>

            <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 flex items-center mb-4">
                <span className="bg-blue-50 text-blue-600 rounded-full w-7 h-7 flex items-center justify-center mr-3 text-base">8</span>
                Contact Us
              </h2>
              <p className="text-gray-900 text-base">
                If you have any questions about this Privacy Policy or wish to exercise your rights, you can contact us at:{" "}
                <a href="mailto:support@meemzee.com" className="text-blue-600 hover:text-blue-800 underline">
                  support@meemzee.com
                </a>
              </p>
            </section>
          </div>

          <div className="mt-8 p-5 bg-gray-50 rounded-lg text-center">
            <p className="text-gray-900 text-sm">
              By using our services, you agree to this Privacy Policy. Thank you for trusting MeemZee Inc.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
