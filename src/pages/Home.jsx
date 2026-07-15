import Hero from '../components/Hero';
import AgendaHighlights from '../components/AgendaHighlights';
import PartnerSection from '../components/PartnerSection';

function Home() {
  return (
    <main id="main-content">
      <Hero />
      <AgendaHighlights />
      <PartnerSection />
    </main>
  );
}

export default Home;