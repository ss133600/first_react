import { styled } from "styled-components";
import { mainColors } from "../../../GlobalStyled";

const SSection = styled.section`
  padding: 100px 20px;
`;

const Title = styled.h3`
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 20px;
  color: ${mainColors.fontColor};
`;

const ConWrap = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
`;
const Con = styled.div`
  margin: 0 15px;
  width: 200px;
  height: 100%;
  background-color: gray;
  &:hover {
    background-color: ${mainColors.pointColor};
  }
  /* => 자기 자신을 선택할 땐 &를 사용함 */
`;

export const Section = () => {
  return (
    <SSection>
      <Title>타이틀</Title>

      <ConWrap>
        <Con></Con>
        <Con></Con>
      </ConWrap>
    </SSection>
  );
};
