import { BookSpine, Footer, Header } from "./components/SiteChrome";
import { TripPlanner } from "./components/TripPlanner";

export default function Home() {
  return (
    <div className="site-shell">
      <BookSpine />
      <main className="paper">
        <Header />
        <TripPlanner />
        <Footer />
      </main>
    </div>
  );
}

