import { styled } from "styled-components";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skill from "./components/Skill";

function App() {
  return (
    <>
      <Header />
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
