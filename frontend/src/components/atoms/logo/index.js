import React from "react";
import { Link } from "react-router-dom";
// Assets
import { imageLogo } from "../../../assets";

export default function Logo() {
  return (
    <Link to="/">
      <img src={imageLogo} alt="Kitabisa Logo" />
    </Link>
  );
}
