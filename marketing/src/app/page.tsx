import dynamic from 'next/dynamic';

// Client components
const HomeWrapper = dynamic(() => import('@/components/home/HomeWrapper'));
const HomeContent = dynamic(() => import('@/components/home/HomeContent'));

export default function Home() {
  return (
    <HomeWrapper>
      <HomeContent />
    </HomeWrapper>
  );
}
