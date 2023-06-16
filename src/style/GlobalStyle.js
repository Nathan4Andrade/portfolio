import { createGlobalStyle } from "styled-components";

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
    
	margin-bottom: 20px;
	font-size: 35px;
  }
  h5{
    margin-top: 2rem;
    font-size: 10px;
    color: #777cf4;
  }

  section {
    margin-top: 8rem;

  }
  section > h2,
  section > h5 {
    text-align: center;
  }

  button {
    background: linear-gradient(90deg, #777cf4 2.62%, #f47777 93.38%);
    border-radius: 24px;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-family: inherit;
	width: max-content;
	color: #ffffff;
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
    header,
    main {
      width: 86%;
    }
    section {
      margin-top: 6rem;
    }
  }
  /* MEDIA QUERIES: medium devices */

  @media screen and (max-width: 600px) {
    header,
    main {
      width: 90%;
    }
    section > h5 {
      margin-top: 3rem;
	  margin-bottom: 0;
    }
  }
`;

export default GlobalStyle;
