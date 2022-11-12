import Home from "./pages/HomePage";
import "animate.css";
import { ToastContainer } from "react-toastify";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Home />
      <ToastContainer />
    </>
  );
}

export default App;
