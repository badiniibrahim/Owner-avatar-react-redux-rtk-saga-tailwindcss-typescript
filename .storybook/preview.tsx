/* eslint-disable */

import { Provider } from "react-redux";
import { history, store } from "../src/store/store";
import { HistoryRouter as Router } from "redux-first-history/rr6";
import React from "react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// Start mock service worker
const { worker } = require("../src/test/msw/browser");
worker.start();
worker.printHandlers();

export const decorators = [
  (Story: any) => (
    <>
      <Provider store={store}>
        <Router history={history}>
          <Story />
        </Router>
      </Provider>
    </>
  ),
];
