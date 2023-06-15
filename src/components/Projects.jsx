import { styled } from "styled-components";

export default function Projects() {
  const projectsList = [
    { name: "Trackit", link: "#" },
    { name: "Cineflex", link: "#" },
    { name: "ZapRecall", link: "#" },
  ];
  return (
    <ProjectsSection id="projects">
      <h2>Projetos</h2>
      <ul>
        {projectsList.map((project) => (
          <li key={project.name}>{project.name}</li>
        ))}
      </ul>
    </ProjectsSection>
  );
}

const ProjectsSection = styled.section``;
