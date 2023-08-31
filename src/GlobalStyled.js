import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainColors = {
  fontColor: "#333",
  pointColor: "green",
};

export const GlobalStyled = createGlobalStyle`
   ${reset}
   *{
        box-sizing: border-box;
   }

   body{
     font-family: 'Noto Sans KR', sans-serif;
   }

   a{
        text-decoration: none;
   }

   /* *reset style을 사용하기 위해서는
   npm에 들어가서 styled-reset들어가서 설치를 한다. */
`;
