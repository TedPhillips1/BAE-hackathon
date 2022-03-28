import { ButtonSection } from "./button-section-styled";
import ButtonComponent from "../button/button-component";
import { useAuth0 } from "@auth0/auth0-react";

function ButtonSectionComponent({ submit }) {
  const { logout } = useAuth0();
  return (
    <ButtonSection>
      <ButtonComponent onClick={submit} text="Submit" />
      <ButtonComponent
        onClick={() => logout({ returnTo: window.location.origin })}
        text="Log Out"
      />
    </ButtonSection>
  );
}

export default ButtonSectionComponent;
