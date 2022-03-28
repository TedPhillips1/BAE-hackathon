import { UserImg } from "./user-image-styled";

function UserImgComponent({ source, username }) {
  return <UserImg src={source} alt={username} />;
}

export default UserImgComponent;
