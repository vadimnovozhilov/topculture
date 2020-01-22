import React from 'react';
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Bangers');
  body {
    font-family: 'Bangers', sans-serif;
  }
`

function App() {
  return (
    <div>
      <GlobalStyles />
      <h1>TOP CULTURE</h1>
    </div>
  );
}

export default App;
