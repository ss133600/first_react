import { styled } from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.bgColor};
  margin-bottom: 30px;
`;

const Con = styled.div`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor};
`;

const Wrap = styled.div`
  width: 1200px;
  height: 400px;
  background-color: greenyellow;
  margin-top: 70px;
`;

export const StyledEx01 = () => {
  return (
    <div>
      <Box bgColor="darkmagenta"></Box>
      <Box bgColor="BLACK"></Box>

      <Con bgColor="salmon" w="500px" h="500px">
        <Con bgColor="pink" w="200px" h="200px"></Con>
      </Con>

      <Wrap>
        <Box bgColor="red"></Box>
      </Wrap>
    </div>
  );
};
