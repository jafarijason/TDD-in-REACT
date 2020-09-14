import React from "react";
// import { render } from "@testing-library/react";
import App from "./App";

import { configure, shallow, mount, render } from 'enzyme';
import Adapter  from 'enzyme-adapter-react-16';
 
configure({adapter: new Adapter()});
const wrapper = shallow(<App />);


describe("App Components", () => {
  
  test("renders learn react link", () => {
    // expect(linkElement).toBeInTheDocument();
    expect(wrapper).toBeTruthy()
  });

});
