import React from "react";
import { shallow } from "enzyme";
import { Route } from "react-router-dom";

import Navbar from "../src/components/Navbar";

import Home from "../src/components/Home";
import Signin from "../src/components/signin";
import Signup from "../src/components/signup";

describe("<Navbar /> component", () => {
  const wrapper = shallow(<Navbar />);

  test("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("<Router /> renders correct routes", () => {
    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});
  });
});