import QuoteComponent from "../quote/quote-component";
import CTAComponent from "../cta/cta-component";
import MoodComponent from "../mood/mood-component";
import JournalComponent from "../journal/journal-component";
import { Content } from "./content-styled";
import { useAuth0 } from "@auth0/auth0-react";
import ButtonComponent from "../button/button-component";
import ButtonSectionComponent from "../button-section/button-section-component";
import DateComponent from "../date/date-component";
import { useReducer } from "react";

const initialState = {
  user: "",
  mood: 0,
  journal: "",
};

function reducer(state, action) {
  switch (action.type) {
    case 1:
      return { ...state, mood: 1 };
    case 2:
      return { ...state, mood: 2 };
    case 3:
      return { ...state, mood: 3 };
    case 4:
      return { ...state, mood: 4 };
    case 5:
      return { ...state, mood: 5 };
    case "journal":
      return { ...state, journal: action.value };
    case "submit":
      return { ...state, user: action.value };
    default:
      return state;
  }
}

function ContentComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user } = useAuth0();
  return (
    <Content>
      {user && <DateComponent />}
      <QuoteComponent text="Insert Mindful / wellness quote here" />
      {!user && <CTAComponent />}
      {user && (
        <>
          <MoodComponent
            one={() => dispatch({ type: 1 })}
            two={() => dispatch({ type: 2 })}
            three={() => dispatch({ type: 3 })}
            four={() => dispatch({ type: 4 })}
            five={() => dispatch({ type: 5 })}
          />
          <JournalComponent
            onChange={(e) => {
              dispatch({ type: "journal", value: e.target.value });
            }}
          />
          <ButtonSectionComponent
            submit={() => {
              dispatch({ type: "submit", value: user.email });
              console.log(state);
            }}
          />
        </>
      )}
    </Content>
  );
}

export default ContentComponent;
