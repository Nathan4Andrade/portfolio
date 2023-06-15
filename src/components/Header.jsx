import { styled } from "styled-components";

export default function Header() {
  return (
    <Navbar>
      <h1>Portfolio</h1>
      <ul>
        <li>Início</li>
        <li>Sobre mim</li>
        <li>Contato</li>
        <li>Projetos</li>
      </ul>
    </Navbar>
  );
}

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  height: 70px;

  ul {
    display: flex;
    gap: 20px;
  }
`;
