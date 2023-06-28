import { styled } from "styled-components";
import PortfolioProject from "./PortfolioProject";
import reactimage from "../assets/react.png";
import trackit from "../assets/trackit-print.jpeg";
import zaprecall from "../assets/zaprecall-print.jpeg";
import cineflex from "../assets/cineflex-print.jpeg";

export default function Projects() {
  const projectsList = [
    {
      name: "Trackit",
      link: "https://trackit-nathan4andrade.vercel.app/",
      github: "https://github.com/Nathan4Andrade/projeto11-trackit",
      image: trackit,
    },
    {
      name: "ZapRecall",
      link: "https://projeto9-zaprecall-murex-two.vercel.app/",
      github: "https://github.com/Nathan4Andrade/projeto9-zaprecall",
      image: zaprecall,
    },
    {
      name: "Cineflex",
      link: "https://projeto10-cineflex-blue-three.vercel.app",
      github: "https://github.com/Nathan4Andrade/projeto10-cineflex",
      image: cineflex,
    },
    {
      name: "Em breve",
      link: "#",
      github: "https://github.com/Nathan4Andrade",
      image: reactimage,
    },
    {
      name: "Em breve",
      link: "#",
      github: "https://github.com/Nathan4Andrade",
      image: reactimage,
    },
  ];
  return (
    <ProjectsSection id="projects">
      <h5>O que tenho feito ultimamente?</h5>
      <h2>Projetos</h2>
      <Container>
        {projectsList.map((project, index) => (
          <PortfolioProject
            key={index}
            name={project.name}
            link={project.link}
            github={project.github}
            image={project.image}
          />
        ))}
      </Container>
    </ProjectsSection>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectsSection = styled.section``;
