import { styled } from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { MdLightbulb, MdOutlineRateReview } from "react-icons/md";
import { IoMdHelpCircle, IoMdCode } from "react-icons/io";
import { useState } from "react";

export default function FloatingNavbar() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <Navbar>
      <ul>
        <li className={activeNav === "#" ? "active" : ""}>
          <a onClick={() => setActiveNav("#")} href="#">
            <AiFillHome />
          </a>
        </li>
        <li className={activeNav === "#aboutme" ? "active" : ""}>
          <a onClick={() => setActiveNav("#aboutme")} href="#aboutme">
            <IoMdHelpCircle />
          </a>
        </li>
        <li className={activeNav === "#skills" ? "active" : ""}>
          <a onClick={() => setActiveNav("#skills")} href="#skills">
            <MdLightbulb />
          </a>
        </li>

        <li className={activeNav === "#projects" ? "active" : ""}>
          <a onClick={() => setActiveNav("#projects")} href="#projects">
            <IoMdCode />
          </a>
        </li>
        <li className={activeNav === "#reviews" ? "active" : ""}>
          <a onClick={() => setActiveNav("#reviews")} href="#reviews">
            <MdOutlineRateReview />
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
      transition: all 400ms ease;
    }
    li:hover {
      background: rgba(0, 0, 0, 0.3);
      transition: all 400ms ease;
    }
    li.active {
      background: linear-gradient(90deg, #777cf4 2.62%, #f47777 93.38%);
      transition: all 400ms ease;
    }
  }
`;
