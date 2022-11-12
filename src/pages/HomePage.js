import Navbar from "../components/Navbar.js/navbar";
import TopSection from "../components/TopSection/TopPart";
import AboutMe from "../components/AboutSection/AboutMe";
import Work from "../components/Projects/Work";
import SkillSection from "../components/Skills/SkillSection";
import ContactMe from "../components/Contact/ContactMe";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <TopSection />
      <AboutMe />
      <Work />
      <SkillSection />
      <ContactMe />
      <Footer />
    </>
  );
};

export default Home;
