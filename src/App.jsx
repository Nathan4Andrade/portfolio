import FloatingNavbar from "./components/FloatingNavbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skill from "./components/Skill";

function App() {
  return (
    <>
      <FloatingNavbar />
      <main>
        <Home />
        <AboutMe />
        <Skill />
        <Projects />
      </main>
    </>
  );
}

export default App;
