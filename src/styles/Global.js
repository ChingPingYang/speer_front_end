import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle` 
    * {
        box-sizing: border-box;
        padding: 0px;
        margin: 0px;
        font-family:Helvetica,Arial
    }
    body, html{
        scroll-behavior: smooth;
    }
   
`;
export default Global;
