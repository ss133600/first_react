import { Link } from "react-router-dom";

export const HeaderEx = () => {
  return (
    <ul>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/sub01"}>SUB01</Link>
      </li>
      <li>
        <Link to={"/sub02"}>SUB02</Link>
      </li>
      <li>
        <Link to={"/sub03"}>SUB03</Link>
      </li>
      <li>
        <Link to={"/sub04"}>SUB04</Link>
      </li>
    </ul>
  );
};
