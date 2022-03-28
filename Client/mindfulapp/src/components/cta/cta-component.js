import MainTextComponent from "../main-text/main-text-component";
import SecondTextComponent from "../second-text/second-text-component";
import ButtonComponent from "../button/button-component";
import { CTA } from "./cta-styled";
import { useAuth0 } from "@auth0/auth0-react";

function CTAComponent() {
  const { loginWithRedirect } = useAuth0();
  return (
    <CTA>
      <MainTextComponent text="Sign up or Log in Here" />
      <SecondTextComponent text="To access the full features and begin your MindWell journey, log in below!" />
      <ButtonComponent onClick={() => loginWithRedirect()} text="Log In" />
    </CTA>
  );
}

export default CTAComponent;
