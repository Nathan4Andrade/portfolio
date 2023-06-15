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

export default function Skill() {
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
    "Node.js", //SiNodedotjs
    "Next.js", //SiNextdotjs
    "Java", // FaJavaSi
    "MongoDB", //SiMongodb
    "GraphQL", //SiGraphql
    "PostgreSQL", //SiPostgresql
    "GitHub",
  ];

  return (
    <SkillSection id="skills">
      <h2>Tecnologias</h2>
      <Container>
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
    </SkillSection>
  );
}
const Container = styled.div`
  display: flex;
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
      transition: all 400ms ease;
      span {
        font-size: 10px;
      }
    }
    li:hover {
      transition: all 400ms ease;
      color: #777cf4;
    }
  }
`;
const Skills = styled.div``;

const SkillSection = styled.section``;
