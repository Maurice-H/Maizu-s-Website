import Footer from "../Sections/Footer";
import GameHistory from "../Sections/GameHistory";
import Header from "../Sections/Header.tsx";
import UnityGame from "../Sections/UnityGame";

function GamesPage() {
  return (
    <>
      <Header />
      <UnityGame />
      <GameHistory />
      <Footer />
    </>
  );
}

export default GamesPage;
