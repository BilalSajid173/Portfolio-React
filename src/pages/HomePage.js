import Navbar from "../components/Navbar.js/navbar";
import TopSection from "../components/TopSection/TopPart";
import AboutMe from "../components/AboutSection/AboutMe";
import Work from "../components/Projects/Work";
import SkillSection from "../components/Skills/SkillSection";
import ContactMe from "../components/Contact/ContactMe";

const Home = () => {
  return (
    <>
      <Navbar />
      <TopSection />
      <AboutMe />
      <Work />
      <SkillSection />
      <ContactMe />
    </>
  );
};

export default Home;
