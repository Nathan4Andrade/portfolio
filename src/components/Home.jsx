import { styled } from "styled-components";
import profile from "../assets/profile.jpg";
import Typewriter from "typewriter-effect";

import Contact from "./Contact";

export default function Home() {
  return (
    <HomeSection id="#">
      <Info>
        <h3>Olá, me chamo</h3>
        <h1>
          <Typewriter
            options={{
              strings: ["Nathan Andrade"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <h2>Desenvolvedor Frontend</h2>
        <>
          <Contact />
        </>
      </Info>
      <Profile>
        <img src={profile} alt="profile picture" />
      </Profile>
    </HomeSection>
  );
}

const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Info = styled.div`
  h1 {
    font-size: 50px;
    @media screen and (max-width: 1024px) {
      font-size: 35px;
    }
  }

  h2 {
    font-style: italic;
    font-size: 30px;
    @media screen and (max-width: 1024px) {
      font-size: 19px;
    }
  }
  h3 {
    color: #777cf4;
  }
`;
const HomeSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5rem;
  max-width: 960px;
  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }

  /* MEDIA QUERIES: medium devices */
  @media screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    justify-content: center;
    padding-top: 0;
  }
`;
