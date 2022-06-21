import { createGlobalStyle } from "styled-components"



 const Global =  createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  li,ul,a{
    list-style: none;
    text-decoration: none;
  }

  /* :root{

  } */

  body{
    max-height: 100vh;
  }
`

export {
  Global
}