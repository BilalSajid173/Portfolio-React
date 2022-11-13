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
    details: {
      features: [
        "User Login and Signup",
        "CRUD operations for articles",
        "Like/Save articles",
        "Comments on articles",
        "Edit User Profile",
        "Search functionality",
        "Filters for articles",
        "Image Upload with Cloudinary",
        "Pagination",
        "Responsive Design",
        "Light/Dark Mode",
      ],
      tools: [
        "Django Rest Framework",
        "React",
        "PostgreSQL",
        "Tailwind CSS",
        "Vercel",
        "Heroku",
        "Framer Motion",
        "Redux Toolkit",
        "React Router",
        "Lottie Animations",
        "Cloudinary",
      ],
      desc: "Many tech lovers enjoy reading informative and interesting blogs on the web. Keeping this in mind, I designed a blog website to allow users to create accounts and share their knowledge with the world :)",
    },
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
    details: {
      features: [
        "User Login and Signup",
        "CRUD operations for posts",
        "Real Time Private Chat",
        "Add/Remove friends",
        "Like/Save posts",
        "Comments on posts",
        "Edit User Profile",
        "Image Upload with Cloudinary",
        "Pagination",
        "Responsive Design",
      ],
      tools: [
        "Nodejs",
        "React",
        "MongoDB Atlas",
        "Vercel",
        "Heroku",
        "Context API",
        "React Router",
        "Socket.io",
        "Material UI",
        "Cloudinary",
      ],
      desc: "A Social Media web app to allow users to connect with friends around the world, share amazing moments with everyone and have fun.",
    },
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
    details: {
      features: [
        "User Login and Signup",
        "CRUD operations for food recipes",
        "Edit User Profile",
        "Search functionality",
        "Save Recipes",
        "Responsive Design",
      ],
      tools: ["Nodejs", "Express", "Ejs", "MongoDb", "Passport", "Cloudinary"],
      desc: "Everyone loves food, right?? So I created this app for users to share their favourite recipes with people from around the world. Happy Fooding!!",
    },
  },
  {
    id: 4,
    title: "Portfolio Site",
    description: "Personal Website using React.",
    codeLink: "https://github.com/BilalSajid173/Portfolio-React",
    projectLink: "https://portfolio-react-6got.vercel.app/",
    img: PortfolioImage,
    techStack: [
      { icon: faReact, color: "#5ED4F4" },
      { icon: faCss3, color: "#28A4D9" },
    ],
    details: {
      features: [
        "Personal Website",
        "Cool Animations",
        "Light/Dark Mode",
        "Responsive Design",
      ],
      tools: [
        "React",
        "Redux Toolkit",
        "Framer Motion",
        "Lottie Animation",
        "Sass",
        "Emailjs",
        "Material UI",
        "Vercel",
      ],
      desc: "This is my personal portfolio for showcasing my projects and skills. Hope you like it ;)",
    },
  },
];

export default Projects;
