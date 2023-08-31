import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { mainColors } from "../../../GlobalStyled";

const Banner = styled.section`
  height: 800px;
  background: url(https://www.simplilearn.com/ice9/free_resources_article_thumb/prop2.JPG)
    no-repeat center / cover;
`;
const Section = styled.section`
  padding: 150px 20%;
  display: flex;
  justify-content: space-between;
  a {
    width: 45%;
    height: 500px;
  }
`;
const Con = styled.div`
  width: 100%;
  height: 500px;
  background: url(${(props) => props.$bgUrl}) no-repeat center / cover;
`;

export const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Section>
        <Link to={"/sub/0"}>
          <Con $bgUrl="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Blade06_teamsbackground_Holiday1_382x252_2x?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=786&hei=443&qlt=75&fit=constrain"></Con>
        </Link>
        <Link to={"/sub/1"}>
          <Con $bgUrl="https://www.popsci.com/uploads/2020/06/05/3NIEQB3SFVCMNHH6MHZ42FO6PA.jpg?auto=webp"></Con>
        </Link>
        <Link to={"/sub/2"}>
          <Con $bgUrl="https://blog.prezi.com/wp-content/uploads/2019/03/jason-leung-479251-unsplash.jpg"></Con>
        </Link>
      </Section>
    </div>
  );
};
