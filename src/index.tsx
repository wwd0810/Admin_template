import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "mobx-react";
import { CookiesProvider } from "react-cookie";

import { ThemeProvider } from "styles/theme-components";
import theme from "./styles/theme";

import RootStore from "stores";

import GlobalStyle from "styles/global-styles";

const stores = new RootStore();

ReactDOM.render(
  <>
    <CookiesProvider>
      {/* <GlobalStyle> */}
      <ThemeProvider theme={theme}>
        <Provider {...stores}>
          <Router>
            <App />
          </Router>
        </Provider>
      </ThemeProvider>
      {/* </GlobalStyle> */}
    </CookiesProvider>
  </>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
