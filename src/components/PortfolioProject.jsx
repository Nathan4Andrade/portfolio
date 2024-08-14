/* eslint-disable react/prop-types */
import { styled } from "styled-components";

export default function PortfolioProject({ name, link, github, image }) {
  return (
    <ProjectItem>
      <img src={image} alt={image} />
      <h4>{name}</h4>
      <Description>
        <button disabled={!link}>
          <a
            href={link}
            target={name !== "Em breve" ? "_blank" : ""}
            rel="noreferrer">
            Link
          </a>
        </button>
        <button className="btn" disabled={!github}>
          <a href={github} target="_blank" rel="noreferrer">
            Github
          </a>
        </button>
      </Description>
    </ProjectItem>
  );
}

const Description = styled.div`
  display: flex;
  gap: 10px;

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
  .btn {
    background: transparent;
    border: 2px solid #777cf4;
  }
`;

const ProjectItem = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 1.3rem;
  border-radius: 2rem;
  border: 1px solid transparent;

  img {
    border-radius: 1.5rem;
    overflow: hidden;
    max-height: 150px;
  }
  h4 {
    margin: 1.2rem 0 2rem;
  }
`;
