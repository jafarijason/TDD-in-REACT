import React from "react";

import App from "./App";

import { shallow } from "enzyme";

const wrapper = shallow(<App />);

describe("App Components", () => {
  test("it should render the app component ", () => {
    expect(wrapper).toBeTruthy();
  });

  test("should render app component", () => {
    const appComponent = wrapper.find("[data-test='app']").length;
    expect(appComponent).toBe(1);
  });

  test("should render increment button", () => {
    const incrementBtn = wrapper.find("[data-test='inc']").length;
    expect(incrementBtn).toBe(1);
  });

  test("should render decrement button", () => {
    const decrementBtn = wrapper.find("[data-test='dec']").length;
    expect(decrementBtn).toBe(1);
  });

});
