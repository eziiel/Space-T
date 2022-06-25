import { createGlobalStyle } from "styled-components"
import BgHome from "../images/home/background-home-desktop.jpg"
import BgDestination from "../images/destination/background-destination-desktop.jpg"
import BgCrew from "../images/crew/background-crew-desktop.jpg"
import BgTechnology from "../images/technology/background-technology-desktop.jpg"

interface Props {
  img?:string
}


function pixelsToRem(...values:Array<number>) {
  return values.reduce((a, i) => (a += i / 16 + `rem `), "").trim();
}

 const Global =  createGlobalStyle<Props>`

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
      --light: #a0a0a0; 
      --light1: #e2e2e2; 
      --light2: #f0f1f1; 
      --dark: #333; 

    //fonts
    --font-small: 500 ${pixelsToRem(10)} 'Titillium Web', sans-serif;
    --font-small1: 500 ${pixelsToRem(16)} 'Titillium Web', sans-serif;
    --font-default2: 500 ${pixelsToRem(24)} 'Titillium Web', sans-serif;
    --font-default: 600 ${pixelsToRem(16)} 'Titillium Web', sans-serif;
    --font-default0: 600 ${pixelsToRem(40)} 'Titillium Web', sans-serif;
    --font-default1: 600 ${pixelsToRem(14)} 'Titillium Web', sans-serif;
    --font-default3: 600 ${pixelsToRem(24)} 'Titillium Web', sans-serif;
    --font-default4: 600 ${pixelsToRem(48)} 'Titillium Web', sans-serif;
    --font-strong0: 700 ${pixelsToRem(24)} 'Titillium Web', sans-serif;
    --font-strong: 700 ${pixelsToRem(70)} 'Titillium Web', sans-serif;
    --font-strong1: 700 ${pixelsToRem(126)} 'Titillium Web', sans-serif;
    /* --font-title: ; */
  }

  body{
    color: #fff;
    height: 100vh;
    /* background: transparent url(BgHome || ); */
    background: transparent url(${BgHome});
    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-family: 'Titillium Web', sans-serif;
  }
  #root{
    height: 100%;
  }
`


export {
  Global
}