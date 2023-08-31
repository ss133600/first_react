import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import { data } from "../api";

const Section = styled.section`
  padding: 150px 20%;
  display: flex;
  justify-content: space-between;
`;
const Bg = styled.div`
  width: 50%;
  height: 500px;
  background: url(${(props) => props.$bgUrl}) no-repeat center/cover;
`;
const TitleWrap = styled.div`
  width: 45%;
  h3 {
    font-size: 40px;
    font-weight: 700;
  }
`;
export const Sub01 = () => {
  const params = useParams();
  // 위랑 밑이랑 같다
  // 비구조화할당이라고 부름
  const { id } = useParams();
  // =>useParams(): 라우터에서 지정한 변수값을 얻어옴
  // =>비구조화 할당: 객체 또는 배열형태로 반환하는 값을 변수명에서
  // 바로 접근하여 사용할 수 있음
  // 비구조화 할당: destructuring assignment

  console.log(id);

  return (
    <Section>
      <Bg $bgUrl={data[id].img} />
      <TitleWrap>
        <h3>{data[id].title}</h3>
        <p>{data[id].desc}</p>
      </TitleWrap>
    </Section>
  );
};
