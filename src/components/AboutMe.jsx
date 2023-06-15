/* eslint-disable react/jsx-key */
import { styled } from "styled-components";

export default function AboutMe() {
  return (
    <AboutMePage id="aboutme">
      <h2>Sobre mim</h2>
      <Container>
        <About>
          <h3>
            Sou um estudante de ciência da computação apaixonado por aplicações
            web e computação voltada para a transformação da sociedade.
            Atualmente estou trabalhando como desenvolvedor web.
          </h3>
        </About>
      </Container>
    </AboutMePage>
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

const About = styled.div`
  display: flex;
  flex-direction: column;
`;

const AboutMePage = styled.section``;
