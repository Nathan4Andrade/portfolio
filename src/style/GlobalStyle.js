import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Poppins', sans-serif;
		background-color: #f2f2f2;
		height: 100vh;
    }
	h1 {
		font-weight: 800;
	}
	h2 {
		font-style: italic;
	}
`;

export default GlobalStyle;
