/* eslint-disable react/jsx-key */
import { styled } from "styled-components";
import {
  SiJavascript,
  SiReact,
  SiPython,
  SiNodedotjs,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiGraphql,
  SiPostgresql,
  SiGithub,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export default function AboutMe() {
  const skills = [
    <SiHtml5 />,
    <SiCss3 />,
    <SiJavascript />,
    <SiReact />,
    <SiPython />,
    <SiNodedotjs />,
    <SiNextdotjs />,
    <FaJava />,
    <SiMongodb />,
    <SiGraphql />,
    <SiPostgresql />,
    <SiGithub />,
  ];
  const skillName = [
    "HTML", // SiHtml5
    "CSS", //SiCss3
    "Javascript", //SiJavascript
    "React.js", //SiReact
    "Python", // SiPython
    "Java", //FaJava
    "Node.js", //SiNodedotjs
    "Next.js", // SiNextdotjs
    "MongoDB", //SiMongodb
    "GraphQL", //SiGraphql
    "PostgreSQL", //SiPostgresql
    "GitHub",
  ];

  return (
    <AboutMePage id="aboutme">
      <h2>/sobre mim</h2>
      <Container>
        <About>
          <h3>
            Sou um estudante de ciência da computação apaixonado por aplicações
            web e computação voltada para a transformação da sociedade.
            Atualmente estou trabalhando como desenvolvedor web.
          </h3>
        </About>
        <Skills>
          <h3>Ultimamente venho trabalhando com estas tecnologias:</h3>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>
                {skill}
                <span>{skillName[index]}</span>
              </li>
            ))}
          </ul>
        </Skills>
      </Container>
    </AboutMePage>
  );
}
const Container = styled.div`
  display: flex;
  > div {
    width: 50%;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    li {
      /* padding-right: 50px;
      padding-top: 20px; */
      font-weight: 600;
      font-size: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        font-size: 10px;
      }
    }
  }
`;
const Skills = styled.div``;
const About = styled.div`
  display: flex;
  flex-direction: column;
`;

const AboutMePage = styled.section``;
