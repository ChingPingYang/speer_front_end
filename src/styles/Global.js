import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle` 
    * {
        box-sizing: border-box;
        padding: 0px;
        margin: 0px;
        font-family:Helvetica,Arial
    }
    body, html{
        background-color: #F2F4F4;
        width: 100vw;
        height: 100vh;
    }
   
`;
export default Global;
