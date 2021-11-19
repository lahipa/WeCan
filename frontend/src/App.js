import React, { Component, useCallback } from "react";
import Root from "./routes";
// Reduxs
import { Provider } from "react-redux";
import { store } from "./reduxs";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

export default App;
