import BlogifyImage from "../../assets/images/Blogify.png";
import KonnectImage from "../../assets/images/Konnect.png";
import FoodbookImage from "../../assets/images/Foodbook.png";
import PortfolioImage from "../../assets/images/Portfolio.png";
import {
  faNodeJs,
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const Projects = [
  {
    id: 1,
    title: "Blogify Web App",
    description: "A blog website for tech junkies!",
    codeLink: "https://github.com/BilalSajid173/Blog-app-frontend",
    projectLink: "https://blogify-app.vercel.app/",
    img: BlogifyImage,
    techStack: [
      { icon: faReact, color: "#5ED4F4" },
      { icon: faJsSquare, color: "#EFD81D" },
    ],
  },
  {
    id: 2,
    title: "Konnect Web App",
    description: "A Social Media app for everyone!",
    codeLink: "https://github.com/BilalSajid173/chat-app-frontend",
    projectLink: "https://konnect-social-app.vercel.app/",
    img: KonnectImage,
    techStack: [
      { icon: faReact, color: "#5ED4F4" },
      { icon: faNodeJs, color: "#609b56" },
    ],
  },
  {
    id: 3,
    title: "Recipe Web App",
    description: "A foodbook app for foodies!",
    codeLink: "https://github.com/BilalSajid173/foodbook",
    projectLink: "https://fierce-waters-21031.herokuapp.com/",
    img: FoodbookImage,
    techStack: [
      { icon: faNodeJs, color: "#609b56" },
      { icon: faHtml5, color: "#F06529" },
      { icon: faCss3, color: "#28A4D9" },
    ],
  },
  {
    id: 4,
    title: "Portfolio Site",
    description: "Personal Website with framer-motion.",
    codeLink: "https://github.com/BilalSajid173/Blog-app-frontend",
    projectLink: "https://blogify-app.vercel.app/",
    img: PortfolioImage,
    techStack: [
      { icon: faReact, color: "#5ED4F4" },
      { icon: faCss3, color: "#28A4D9" },
    ],
  },
];

export default Projects;
