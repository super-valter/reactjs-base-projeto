import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  background-color: ${colors.primaryColorDark};
  color: ${colors.primaryColor};
}

html, body, #root {
  height: 100%;
}

button {
  cursor: pointer;
  background-color: ${colors.primaryColor};
  border: none;
  color: #FFF;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 700;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

`;

export const Container = styled.section`
max-width: 360px;
background-color: #FFF;
margin: 30px auto;
padding: 30px;
border-radius: 8px;
box-shadow: 0 0 10px rgba(0, 0, 0, .1);
`;
