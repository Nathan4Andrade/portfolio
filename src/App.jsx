import { styled } from "styled-components";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Home />
        <AboutMe />
        <Contact />
        <Projects />
      </Main>
    </>
  );
}

export default App;

const Main = styled.main`
  margin: 0 auto;
  padding: 0 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
