import { styled } from "styled-components";
import { Link } from "react-scroll";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineRateReview, MdContacts } from "react-icons/md";
import { IoMdHelpCircle, IoMdCode } from "react-icons/io";
import { FaHome, FaUser, FaCode, FaComment } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
import { useState } from "react";

export default function FloatingNavbar() {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <Navbar>
      <ul>
        <li className={activeNav === "#" ? "active" : ""}>
          <Link
            to="#"
            spy={true}
            smooth={true}
            offset={-140}
            duration={500}
            onClick={() => setActiveNav("#")}>
            <FaHome />
          </Link>
          {/*  <a onClick={() => setActiveNav("#")} href="#"></a> */}
        </li>
        <li className={activeNav === "#aboutme" ? "active" : ""}>
          <Link
            to="aboutme"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => setActiveNav("#aboutme")}>
            <FaUser />
          </Link>
        </li>

        <li className={activeNav === "#projects" ? "active" : ""}>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => setActiveNav("#projects")}>
            <FaCode />
          </Link>
        </li>
        <li className={activeNav === "#reviews" ? "active" : ""}>
          <Link
            to="reviews"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => setActiveNav("#reviews")}>
            <FaComment />
          </Link>
        </li>
        <li className={activeNav === "#contacts" ? "active" : ""}>
          <Link
            to="contacts"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={() => setActiveNav("#contacts")}>
            <RiContactsBook2Fill />
          </Link>
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
    gap: 18px;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.1rem;

      > :hover {
        transition: all 400ms ease;
        background: rgba(0, 0, 0, 0.3);
      }

      a {
        padding: 1rem;
        height: 1rem;
        width: 1rem;
        border-radius: 50%;
        background: transparent;

        svg {
          position: relative;
          bottom: -30%;
          transform: translateY(-50%);
        }
      }

      .active {
        transition: all 400ms ease;
        background: linear-gradient(90deg, #777cf4 2.62%, #f47777 93.38%);
      }
    }
  }
`;
