import { styled } from "styled-components";
import PortfolioProject from "./PortfolioProject";
/* import reactimage from "../assets/react.png"; */
import trackit from "../assets/trackit-print.jpeg";
import zaprecall from "../assets/zaprecall-print.jpeg";
import cineflex from "../assets/cineflex-print.jpeg";
import mywallet from "../assets/mywallet-logo.png";
import catwalk from "../assets/catwalk.png";
import shortly from "../assets/shortly.png";
import falefacilponto from "../assets/falefacilponto.png";

export default function Projects() {
  const projectsList = [
    {
      name: "Fale Fácil Ponto (Fullstack)",
      link: "https://apps.falefacilvoip.com.br/ponto",
      image: falefacilponto,
    },
    {
      name: "Catwalk",
      link: "https://catwalk-chi.vercel.app/",
      github: "https://github.com/Nathan4Andrade/projeto18-freela-front",
      image: catwalk,
    },
    {
      name: "Shortly (API)",
      github: "https://github.com/Nathan4Andrade/projeto17-shortly",
      image: shortly,
    },
    {
      name: "MyWallet",
      link: "https://mywallet-nathan4andrade.vercel.app/",
      github: "https://github.com/Nathan4Andrade/projeto14-mywallet-front",
      image: mywallet,
    },
    {
      name: "MyWallet (API)",

      github: "https://github.com/Nathan4Andrade/projeto14-mywallet-back",
      image: mywallet,
    },
    {
      name: "Trackit",
      link: "https://trackit-nathan4andrade.vercel.app/",
      github: "https://github.com/Nathan4Andrade/trackit",
      image: trackit,
    },
    {
      name: "Cineflex",
      link: "https://cineflex-nathan4andrade.vercel.app/",
      github: "https://github.com/Nathan4Andrade/cineflex",
      image: cineflex,
    },
    {
      name: "ZapRecall",
      link: "https://projeto9-zaprecall-murex-two.vercel.app/",
      github: "https://github.com/Nathan4Andrade/projeto9-zaprecall",
      image: zaprecall,
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
