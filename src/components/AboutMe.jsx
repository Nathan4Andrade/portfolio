/* eslint-disable react/jsx-key */
import { styled, keyframes } from "styled-components";
import profile from "../assets/profile2.jpeg";
import { FaUserGraduate } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { BsFillAwardFill } from "react-icons/bs";
import { MdDesignServices } from "react-icons/md";
import { SiWebpack } from "react-icons/si";
import { IoMdFlower } from "react-icons/io";

export default function AboutMe() {
  return (
    <AboutMeSection id="aboutme">
      <h5>Conheça um pouco</h5>
      <h2>Sobre mim</h2>
      <Container>
        <Profile>
          <div>
            <img src={profile} alt="profile picture" />
          </div>

          <button>
            <a href="#contacts">Vamos conversar?</a>
          </button>
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
            <Card>
              <h4>
                <MdDesignServices />
              </h4>
              <p>Entusiasta em</p>
              <h3>UX/UI</h3>
            </Card>
            <Card>
              <h4>
                <SiWebpack />
              </h4>
              <p>+20 Projetos</p>
              <h3>Desenvolvidos</h3>
            </Card>
            <Card>
              <h4>
                <IoMdFlower />
              </h4>
              <p>Solucionador</p>
              <h3>Criativo</h3>
            </Card>
          </Cards>
          <p>
            Sou um estudante de Ciência da Computação apaixonado por aplicações
            web e computação voltada para a transformação da sociedade.
            Atualmente estou trabalhando como desenvolvedor Full Stack, desenvolvendo aplicativos em React e Node.js.
          </p>
        </About>
      </Container>
    </AboutMeSection>
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
const Cards = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  li:hover {
    /*     background: transparent; */
    animation: ${shadowPop} 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
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
    margin: 1rem 0 1.5rem;
    font-size: 0.8rem;
  }
  @media screen and (max-width: 600px) {
    text-align: center;
  }
`;
const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15%;
  button {
    margin-bottom: 30px;
  }
  > div {
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
