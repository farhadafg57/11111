import LandingPage from '@/components/landing-page';

// The root of the app now directly renders the LandingPage.
// This simplifies the entry flow and removes intermediate splash/redirect pages.
export default function Home() {
  return <LandingPage />;
}
