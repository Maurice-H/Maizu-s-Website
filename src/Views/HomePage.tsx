import AboutMe from "../Sections/AboutMe";
import Footer from "../Sections/Footer";
import Header from "../Sections/Header.tsx";
import Welcome from "../Sections/Welcome";

function HomePage() {
  return (
    <>
      <Header />
      <Welcome />
      <AboutMe />
      <Footer />
    </>
  );
}

export default HomePage;
