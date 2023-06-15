export default function Projects() {
  const projectsList = [
    { name: "Trackit", link: "#" },
    { name: "Cineflex", link: "#" },
    { name: "ZapRecall", link: "#" },
  ];
  return (
    <>
      <h1>Dá uma olhada nos meus projetos:</h1>
      <ul>
        {projectsList.map((project) => (
          <li key={project.name}>{project.name}</li>
        ))}
      </ul>
    </>
  );
}
