import QuoteComponent from "../quote/quote-component";
import CTAComponent from "../cta/cta-component";
import MoodComponent from "../mood/mood-component";
import { Content } from "./content-styled";
import { useAuth0 } from "@auth0/auth0-react";
import ButtonComponent from "../button/button-component";

function ContentComponent() {
  const { user, logout } = useAuth0();
  return (
    <Content>
      <QuoteComponent text="Insert Mindful / wellness quote here" />
      {!user && <CTAComponent />}
      {user && (
        <>
          <MoodComponent />
          {/* <JournalComponent /> */}
          <ButtonComponent
            onClick={() => logout({ returnTo: window.location.origin })}
            text="Log Out"
          />
        </>
      )}
    </Content>
  );
}

export default ContentComponent;
