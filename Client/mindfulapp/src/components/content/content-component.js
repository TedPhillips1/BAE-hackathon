import QuoteComponent from "../quote/quote-component";
import CTAComponent from "../cta/cta-component";
import MoodComponent from "../mood/mood-component";
import JournalComponent from "../journal/journal-component";
import { Content } from "./content-styled";
import { useAuth0 } from "@auth0/auth0-react";
import ButtonComponent from "../button/button-component";
import ButtonSectionComponent from "../button-section/button-section-component";
import DateComponent from "../date/date-component";

function ContentComponent() {
  const { user } = useAuth0();
  return (
    <Content>
      {user && <DateComponent />}
      <QuoteComponent text="Insert Mindful / wellness quote here" />
      {!user && <CTAComponent />}
      {user && (
        <>
          <MoodComponent />
          <JournalComponent onChange={() => {}} />
          <ButtonSectionComponent submit={() => {}} />
        </>
      )}
    </Content>
  );
}

export default ContentComponent;
