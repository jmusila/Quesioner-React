import React from "react";
import { shallow } from "enzyme";

import App from "../src/App";

describe("<App /> root component", () => {
  test("renders without crashing", () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});