import { styled } from "styled-components";
const Message = styled.div`
  font-size: 14px;
  color: crimson;
  font-weight: 600;
  margin-top: 5px;
`;

export const ErrorMessage = ({ text }) => {
  return <Message>{text}</Message>;
};
