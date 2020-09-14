import React from "react";

import App from "./App";

import { shallow } from "enzyme";

const setup = (props = {}, state = null) => {
  return shallow(<App {...props} />);
};

const wrapper = setup();

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

describe("App Components", () => {
  test("it should render the app component ", () => {
    expect(wrapper).toBeTruthy();
  });

  test("should render app component", () => {
    const appComponent = findByTestAttr(wrapper, "app").length;
    expect(appComponent).toBe(1);
  });

  test("should render increment button", () => {
    const incrementBtn = findByTestAttr(wrapper, "inc").length;
    expect(incrementBtn).toBe(1);
  });

  test("should render decrement button", () => {
    const decrementBtn = findByTestAttr(wrapper, "dec").length;
    expect(decrementBtn).toBe(1);
  });

  test("should test counter start at zero", () => {
    const initialCounterState = findByTestAttr(wrapper, "counter-display");
  });

  test("Increment btn shoud increse counter-display", () => {
    const app = setup();
    const btn = findByTestAttr(app, "inc");
    const valBefore = findByTestAttr(app, "counter-display").text();
    btn.simulate("click");
    const counterDisplay = findByTestAttr(app, "counter-display");
    expect(parseInt(counterDisplay.text())).toBe(parseInt(valBefore) + 1);
  });
  test("Decrement btn should decrese counter-display", () => {
    const app = setup();
    const btn = findByTestAttr(app, "dec");
    const valBefore = findByTestAttr(app, "counter-display").text();
    btn.simulate("click");
    const counterDisplay = findByTestAttr(app, "counter-display");
    expect(parseInt(counterDisplay.text())).toBe(parseInt(valBefore) - 1);
  });
});
