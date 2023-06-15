import { styled } from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { MdLightbulb } from "react-icons/md";
import { IoMdHelpCircle, IoMdCode } from "react-icons/io";
import { useState } from "react";

export default function Header() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <Navbar>
      <ul>
        <li
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}>
          <a href="#">
            <AiFillHome />
          </a>
        </li>
        <li
          onClick={() => setActiveNav("#aboutme")}
          className={activeNav === "#aboutme" ? "active" : ""}>
          <a href="#aboutme">
            <IoMdHelpCircle />
          </a>
        </li>
        <li
          onClick={() => setActiveNav("#skills")}
          className={activeNav === "#skills" ? "active" : ""}>
          <a href="#skills">
            <MdLightbulb />
          </a>
        </li>

        <li
          onClick={() => setActiveNav("#projects")}
          className={activeNav === "#projects" ? "active" : ""}>
          <a href="#projects">
            <IoMdCode />
          </a>
        </li>
      </ul>
    </Navbar>
  );
}

const Navbar = styled.div`
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  z-index: 2;
  display: block;
  left: 50%;
  padding: 0.1rem 1.7rem;
  transform: translateX(-50%);
  bottom: 2rem;
  width: max-content;
  border-radius: 3rem;
  backdrop-filter: blur(15px);

  ul {
    display: flex;
    gap: 20px;

    li {
      background: transparent;
      padding: 0.9rem;
      border-radius: 50%;
      font-size: 1.1rem;
      line-height: 0;
    }
    li:hover {
      background: rgba(0, 0, 0, 0.3);
    }
    li.active {
      background: linear-gradient(90deg, #777cf4 2.62%, #f47777 93.38%);
    }
  }
`;
