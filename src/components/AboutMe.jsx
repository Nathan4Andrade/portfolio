/* eslint-disable react/jsx-key */
import { styled } from "styled-components";
import profile from "../assets/profile2.jpeg";
import { FaUserGraduate } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { BsFillAwardFill } from "react-icons/bs";

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
              <h4>
                <BsFillAwardFill />
              </h4>
              <p>Experiência</p>
              <h3>+5 anos</h3>
            </Card>
            <Card>
              <h4>
                <FaUserGraduate />
              </h4>

              <p>Graduando em</p>
              <h3>Computação</h3>
            </Card>
            <Card>
              <h4>
                <RiComputerFill />
              </h4>
              <p>Técnico em</p>
              <h3>Informática</h3>
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  li:hover {
    background: transparent;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const Card = styled.li`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid transparent;
  border-radius: 1rem;
  padding: 2rem 0;
  text-align: center;
  transition: all 400ms ease;
  h4 {
    margin-bottom: 1rem;
  }
  p {
    font-size: 0.7rem;
  }
  h3 {
  }

  /*  
  
  backdrop-filter: blur(15px);
  text-align: center;
 
  
  } */
`;
const About = styled.div`
  > p {
    margin: 2rem 0 2.6rem;
    @media screen and (max-width: 1024px) {
      margin: 1rem 0 1.5rem;
    }
  }
  @media screen and (max-width: 600px) {
    text-align: center;
  }
`;
const Profile = styled.div`
  display: grid;
  place-items: center;
  border-radius: 2rem;
  aspect-ratio: 1/1;
  background: linear-gradient(90deg, #777cf4 2.62%, #f47777 93.38%);
  img {
    border-radius: 2rem;
    transform: rotate(-5deg);
    transition: all 400ms ease;
    overflow: hidden;
  }
  img:hover {
    transform: rotate(0deg);
  }

  @media screen and (max-width: 1024px) {
    width: 50%;
    margin: 2rem auto 4rem;
  }
  @media screen and (max-width: 600px) {
    width: 65%;
    margin: 0 auto 3rem;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 15%;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 0;
    h2 {
      margin-top: 20px;
    }
  }
`;

const AboutMeSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 1024px) {
    height: max-content;
  }
`;
