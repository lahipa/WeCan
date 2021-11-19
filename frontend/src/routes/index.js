import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import { Page404, Home } from "../pages";

class Roots extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Page404 />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Roots;
