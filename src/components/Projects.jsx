import { styled } from "styled-components";
import PortfolioProject from "./PortfolioProject";
import reactimage from "../assets/react.png";
import trackit from "../assets/trackit2.png";
import zaprecall from "../assets/zaprecall.png";
import cineflex from "../assets/cineflex.png";

export default function Projects() {
  const projectsList = [
    {
      name: "Trackit",
      link: "https://projeto11-trackit-lyart-zeta.vercel.app/",
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
      link: "projeto10-cineflex-blue-three.vercel.app",
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
        {projectsList.map((project) => (
          <PortfolioProject
            key={project.name}
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
