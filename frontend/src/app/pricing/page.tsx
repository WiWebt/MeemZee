import dynamic from 'next/dynamic';

const Pricing = dynamic(() => import('@/components/pricing/Pricing'), { ssr: true });

export const metadata = {
  title: 'Pricing - MeemZee',
  description: 'Choose your plan to access our baby products store, home & kitchen marketplace, price tracking features, and utility tools.',
};

export default function PricingPage() {
  return (
    <main className="min-h-screen pt-16 bg-gradient-to-br from-blue-50 via-gray-50 to-indigo-50">  
        <Pricing />
    </main>
  );
}
