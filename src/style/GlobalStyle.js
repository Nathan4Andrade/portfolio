import { createGlobalStyle, styled } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  ::-webkit-scrollbar {
    display: none;
  }

  body {
    font-family: "Poppins", sans-serif;
    background-color: #2c2c2c;
    color: #ffffff;

    line-height: 1.7;
  }

  main {
    margin: 0 auto;
    width: 75%;
  }
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 500;
  }
  h2 {
    font-style: italic;
  }

  section {
    margin-top: 8rem;
	height: 100vh;
  }
  section > h2,
  section > h5 {
    text-align: center;
  }

  button {
	background: linear-gradient(90deg, #777CF4 2.62%, #F47777 93.38%);
	border-radius: 24px;
	border: none;
	padding: 10px 20px;
	cursor: pointer;
	font-family: inherit;
  }
  a {
	text-decoration: none;
	color: #ffffff;
    transition: all 400ms ease;
  }


  img {
    display: block;
    width: 100%;
    object-fit: cover;
  }

  /* MEDIA QUERIES: medium devices */

  @media screen and (max-width: 1024px) {
    header, main {
      width: 86%;
    }
    section {
      margin-top: 6rem;
    }
  }
  /* MEDIA QUERIES: medium devices */

  @media screen and (max-width: 600px) {
    header, main {
      width: 90%;
    }
    section > h2 {
      margin-top: 2rem;
    }
  }
`;

export default GlobalStyle;
