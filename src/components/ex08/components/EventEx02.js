import { useState } from "react";
import { styled } from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.$isColor};
`;

// const ChangeHandler = () => {
//   setBgColor(bgColor);
// };

export const EventEx02 = (props) => {
  const [bgColor, setBgColor] = useState("black");
  const [num, setNum] = useState(0);

  const onChangeColor = () => {
    if (num === 0) {
      setBgColor("salmon");
      setNum(num + 1);
    } else if (num === 1) {
      setBgColor("black");
      setNum(num - 1);
    }
  };

  return (
    <div>
      <Box onClick={onChangeColor} $isColor={bgColor}></Box>
      {/* <Box onClick={() => setBgColor("salmon")} $isColor={bgColor}></Box> */}

      {/* $표시는 버전이 바뀌어서 생긴 오류로 $표시 해주기 */}
    </div>
  );
};
