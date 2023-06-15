import { styled } from "styled-components";

export default function AboutMe() {
  const skills = [
    "Javascript",
    "React.js",
    "Python",
    "Java",
    "Node.js",
    "Next.js",
    "HTML & CSS",
    "MongoDB",
    "GraphSQL",
    "PostgreSQL",
  ];
  return (
    <AboutMePage>
      <About>
        <h3>
          Sou um estudante de ciência da computação apaixonado por aplicações
          web e computação voltada para a transformação da sociedade. Atualmente
          estou trabalhando como desenvolvedor web.
        </h3>
      </About>
      <Skills>
        <h3>Ultimamente venho trabalhando com estas tecnologias:</h3>
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </Skills>
    </AboutMePage>
  );
}

const Skills = styled.div``;
const About = styled.div`
  display: flex;
  flex-direction: column;
`;

const AboutMePage = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    width: 50%;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        padding-right: 10px;
        font-weight: 600;
      }
    }
  }
`;
