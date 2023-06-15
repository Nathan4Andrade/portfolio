/* eslint-disable react/jsx-key */
import { styled } from "styled-components";
import profile from "../assets/profile2.jpeg";

export default function AboutMe() {
  return (
    <AboutMeSection id="aboutme">
      <h2>Sobre mim</h2>
      <Container>
        <Profile>
          <img src={profile} alt="profile picture" />
        </Profile>
        <About>
          <Cards>
            <Card>
              <p>Graduando em</p>
              <h3>Ciência da Computação</h3>
            </Card>
            <Card>
              <p>Técnico em</p>
              <h3>Informática</h3>
            </Card>
            <Card>
              <p>Projetos</p>
              <h3>+20 completos</h3>
            </Card>
            <Card>
              <p>Experiência</p>
              <h3>+5 anos</h3>
            </Card>
          </Cards>

          <p>
            Sou um estudante de Ciência da Computação apaixonado por aplicações
            web e computação voltada para a transformação da sociedade.
            Atualmente estou trabalhando como desenvolvedor web.
          </p>
          <button>Vamos conversar!</button>
        </About>
      </Container>
    </AboutMeSection>
  );
}
const Cards = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
const Card = styled.li`
  width: 130px;
  height: 130px;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(15px);
  text-align: center;
  padding: 5px;
  > p {
    font-size: 12px;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > ul {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    > li {
      /* padding-right: 50px;
      padding-top: 20px; */
      font-weight: 600;
      font-size: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: all 400ms ease;
      > span {
        font-size: 10px;
      }
    }
    > li:hover {
      transition: all 400ms ease;
      color: #777cf4;
    }
  }
`;

const About = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const AboutMeSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
