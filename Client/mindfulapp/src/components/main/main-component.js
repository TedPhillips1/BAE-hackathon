import ContentComponent from "../content/content-component";
import NavbarComponent from "../navbar/navbar-component";
import { Main } from "./main-styled";

function MainComponent() {
  return (
    <Main>
      <NavbarComponent />
      <ContentComponent />
    </Main>
  );
}

export default MainComponent;
