import configureMockStore from 'redux-mock-store';
import React from "react";
import { shallow } from "enzyme";
import axios from "axios";

import Home from "../src/components/Home";

const mockStore = configureMockStore();

const store = mockStore({});

jest.mock("axios");

describe("Home component", () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore({});
    wrapper = shallow(<Home store={store} />);
  });
  const getSpy = jest.spyOn(axios, "get");

  it("renders without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("renders with correct state", () => {
    expect(wrapper).state("meetups")).toEqual([]);
});

it("mock fetch list of meetups from api", () => {
  expect(getSpy).toBeCalled();
  getSpy.mockClear();
});
});