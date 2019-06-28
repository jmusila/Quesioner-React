import React from "react";
import { shallow } from "enzyme";
import axios from "axios";
import configureMockStore from 'redux-mock-store';
import Home from "../src/components/Home";

jest.mock("axios");
const mockStore = configureMockStore();

describe('Test home Component', () => {
  let store;
  let wrapper;
  const getSpy = jest.spyOn(axios, "get");

  beforeEach(() => {
    store = mockStore({});
    wrapper = shallow(<Home store={store} />);
  });
  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("renders with correct state", () => {
    expect(wrapper.state("meetups")).toEqual([]);
  });
  test("mock fetch list of meetups from api", () => {
    expect(getSpy).toBeCalled();
    getSpy.mockClear();
  });
})
