import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IconEx = () => {
  return (
    <div>
      <h3>메뉴 버튼</h3>
      <FontAwesomeIcon
        icon={faBars}
        style={{
          color: "teal",
          fontSize: "30px",
        }}
      />

      <br />
      <br />

      <h3>유저 아이콘</h3>
      <FontAwesomeIcon
        icon={faUserTie}
        style={{
          fontSize: "40px",
        }}
      />
    </div>
  );
};
