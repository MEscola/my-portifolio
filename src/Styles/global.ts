import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html, body, #root {
    
    scroll-behavior: smooth;
    font-family: "Poppins", sans-serif;
}

a {
   text-decoration: none;
   outline: none;
}
`
export default globalStyle;