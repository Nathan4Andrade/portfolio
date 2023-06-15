import { styled } from "styled-components";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import cv from "../assets/cv-nathan_andrade.pdf";

export default function Contact() {
  return (
    <ContactPage id="contact">
      <button>
        <a href={cv} download>
          Baixe meu currículo
        </a>
      </button>
      <ul>
        <li></li>
        <li>
          <a
            href="https://www.linkedin.com/in/nathanandradehenriques/"
            target="_blank"
            rel="noreferrer">
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a
            href="mailto:nathanandrade20@gmail.com"
            target="_blank"
            rel="noreferrer">
            <GrMail />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Nathan4Andrade"
            target="_blank"
            rel="noreferrer">
            <BsGithub />
          </a>
        </li>
      </ul>
    </ContactPage>
  );
}

const ContactPage = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: flex-end;
  ul {
    display: flex;
    align-items: center;
    font-size: 20px;
    li {
      margin-right: 20px;
      a:hover {
        color: #777cf4;
      }
    }
  }
`;
