import Navbar from "../components/Navbar.js/navbar";
import TopSection from "../components/TopSection/TopPart";
import AboutMe from "../components/AboutSection/AboutMe";
import Work from "../components/Projects/Work";
import SkillSection from "../components/Skills/SkillSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <TopSection />
      <AboutMe />
      <Work />
      <SkillSection />
    </>
  );
};

export default Home;
