import React from "react";
import { ThemeWrapper, Img } from "./style.jsx";

const ThemeSwitcher = () => {
  return (
    <ThemeWrapper>
      <Img src={require("../../assets/sun.svg").default} alt="" />
      <span> &nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <Img src={require("../../assets/moon.svg").default} alt="" />
    </ThemeWrapper>
  );
};

export default ThemeSwitcher;
