import ButtonComponent from "../button/button-component";
import HeaderComponent from "../header/header-component";
import { Navbar } from "./navbar-styled";
import { useAuth0 } from "@auth0/auth0-react";
import UserImgComponent from "../user-image/user-image-component";

function NavbarComponent() {
  const { loginWithRedirect, user } = useAuth0();

  return (
    <Navbar>
      <HeaderComponent />
      {!user && (
        <ButtonComponent onClick={() => loginWithRedirect()} text="Log In" />
      )}
      {user && <UserImgComponent source={user.picture} username={user.name} />}
    </Navbar>
  );
}

export default NavbarComponent;
