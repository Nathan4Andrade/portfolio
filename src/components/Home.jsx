import { styled } from "styled-components";
import profile from "../assets/profile.jpg";

import Contact from "./Contact";

export default function Home() {
  return (
    <HomePage id="home">
      <Info>
        <h3>Olá, me chamo</h3>
        <h1>Nathan Andrade</h1>
        <h2>Desenvolvedor Frontend</h2>
        <>
         
          <Contact />
        </>
      </Info>
      <Profile>
        <img src={profile} alt="profile picture" />
      </Profile>
    </HomePage>
  );
}

const Profile = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Info = styled.div`
  width: 50%;
  /*  h1,
  h2,
  h3 {
    padding-bottom: 9px;
  } */
  h1 {
    font-size: 50px;
  }
  h2 {
    font-size: 30px;
  }
`;
const HomePage = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    max-width: 300px;
    max-height: 300px;
    border-radius: 50%;
  }
`;
