import React from "react";
import ReactDOM from "react-dom";
import { cleanup, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// Components
import App from "./App";
import { Button } from "./components/atoms";

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it("Render app without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Render button correctly", () => {
  const { getByTestId } = render(<Button>Click Me</Button>);

  expect(getByTestId("button")).toHaveTextContent("Click Me");
});
