/* eslint-disable react/jsx-key */
import { styled, keyframes } from "styled-components";
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
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { BsFillBootstrapFill } from "react-icons/bs";

export default function Skill() {
  const skillsFront = [
    { skill: <SiHtml5 />, name: "HTML" },
    { skill: <SiCss3 />, name: "CSS" },
    { skill: <SiJavascript />, name: "Javascript" },
    { skill: <SiReact />, name: "React.js" },
    { skill: <SiNextdotjs />, name: "Next.js" },
    { skill: <BsFillBootstrapFill />, name: "Bootstrap" },
  ];

  const skillsBack = [
    { skill: <SiPython />, name: "Python" },
    { skill: <SiNodedotjs />, name: "Node.js" },
    { skill: <FaJava />, name: "Java" },
    { skill: <SiMongodb />, name: "MongoDB" },
    { skill: <SiGraphql />, name: "GraphQL" },
    { skill: <SiPostgresql />, name: "PostgreSQL" },
  ];

  return (
    <SkillSection id="skills">
      <h5>Que habilidades tenho agora?</h5>
      <h2>Tecnologias</h2>
      <Container>
        <Skills>
          <h3>Desenvolvimento Front-end</h3>
          <ul>
            {skillsFront.map((s, index) => (
              <li key={index}>
                {s.skill}
                <span>{s.name}</span>
              </li>
            ))}
          </ul>
        </Skills>
        <Skills>
          <h3>Desenvolvimento Back-end</h3>
          <ul>
            {skillsBack.map((s, index) => (
              <li key={index}>
                {s.skill}
                <span>{s.name}</span>
              </li>
            ))}
          </ul>
        </Skills>
      </Container>
    </SkillSection>
  );
}

const shadowPop = keyframes`

0% {
    box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e;
    transform: translateX(0) translateY(0);
  }
  100% {
    box-shadow: 1px 1px #3e3e3e, 2px 2px #3e3e3e, 3px 3px #3e3e3e, 4px 4px #3e3e3e, 5px 5px #3e3e3e, 6px 6px #3e3e3e, 7px 7px #3e3e3e, 8px 8px #3e3e3e;
    transform: translateX(-8px) translateY(-8px);
  }

`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  > div:hover {
    animation: ${shadowPop} 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  }
  h3 {
    text-align: center;
    margin-bottom: 2rem;
    color: #777cf4;
  }
  ul {
    display: flex;
    justify-content: center;
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
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 600px) {
    gap: 1rem;
  }
`;
const Skills = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 2.4rem 5rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  @media screen and (max-width: 1024px) {
    width: 80%;
    padding: 2rem;
    margin: 0 auto;
  }
`;

const SkillSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1024px) {
  }
`;
