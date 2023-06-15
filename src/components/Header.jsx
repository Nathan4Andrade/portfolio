import { styled } from "styled-components";

export default function Header() {
  return (
    <header>
      <Navbar>
        <h1>Portfolio</h1>
        <ul>
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#aboutme">Sobre mim</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
        </ul>
      </Navbar>
    </header>
  );
}

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 70px;

  ul {
    display: flex;
    gap: 20px;
  }
`;
