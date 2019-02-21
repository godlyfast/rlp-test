import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";

import rootReducer from "./reducers";
import rootSaga from "./sagas";
const sagaMiddleware = createSagaMiddleware();

it("renders without crashing", () => {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  const div = document.createElement("div");
  sagaMiddleware.run(rootSaga);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );

  ReactDOM.unmountComponentAtNode(div);
});
