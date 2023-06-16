import FloatingNavbar from "./components/FloatingNavbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Reviews from "./components/Reviews";
import ContactOptions from "./components/ContactOptions";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <FloatingNavbar />
      <main>
        <Home />
        <AboutMe />
        <Skill />
        <Projects />
        <Reviews />
        <ContactOptions />
      </main>
      <Footer />
    </>
  );
}

export default App;
