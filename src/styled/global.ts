import { createGlobalStyle } from "styled-components"
import BgDesk from "../images/home/background-home-desktop.jpg"


function pixelsToRem(...values:Array<number>) {
  return values.reduce((a, i) => (a += i / 16 + `rem `), "").trim();
}

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
  img{
    display: block;
    max-width: 100%;
  }

  :root{
    //colors
      --light: #f0f1f1; 

    //fonts
    --font-default: 500 ${pixelsToRem(16)} 'Titillium Web', sans-serif;
    --font-default2: 500 ${pixelsToRem(24)} 'Titillium Web', sans-serif;
    --font-default3: 600 ${pixelsToRem(24)} 'Titillium Web', sans-serif;
    --font-default4: 600 ${pixelsToRem(48)} 'Titillium Web', sans-serif;
    --font-strong1: 700 ${pixelsToRem(126)} 'Titillium Web', sans-serif;
    /* --font-title: ; */
  }

  body{
    color: #fff;
    height: 100vh;
    background: transparent url(${BgDesk});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-family: 'Titillium Web', sans-serif;
  }
`

export {
  Global
}