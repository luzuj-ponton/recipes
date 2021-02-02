import { BrowserRouter } from "react-router-dom";

import { Routing } from "config/Routing";
import GlobalStyle from "styles/GlobalStyle";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routing />
      </BrowserRouter>
    </>
  );
};
