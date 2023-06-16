import { styled } from "styled-components";

export default function Footer() {
  return (
    <FooterSection>
      <h1>/Nathan Andrade</h1>
      <ul>
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#aboutme">Sobre mim</a>
        </li>
        <li>
          <a href="#skills">Tecnologias</a>
        </li>
        <li>
          <a href="#projects">Projetos</a>
        </li>
        <li>
          <a href="#reviews">Reviews</a>
        </li>
        <li>
          <a href="#contacts">Contatos</a>
        </li>
      </ul>
      <Copyright>
        <small>&copy; Nathan Andrade. All rights reserved.</small>
      </Copyright>
    </FooterSection>
  );
}

const Copyright = styled.div`
  margin-bottom: 4rem;
`;

const FooterSection = styled.footer`
  background: #777cf4;
  padding: 3rem 0;
  text-align: center;
  font-size: 0.9rem;
  margin-top: 7rem;
  h1 {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 2rem;
  }
  ul {
    display: flex;
    flex: wrap;
    justify-content: center;
    gap: 2rem;
    margin: 0 auto 3rem;
    @media screen and (max-width: 600px) {
      flex-direction: column;
      gap: 1rem;
    }
  }
`;
