import Script from 'next/script';

export default function UtilityToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Load AdSense script only on this page */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5338136896112387"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <div className="min-h-screen">
        {children}
      </div>
    </>
  );
}
