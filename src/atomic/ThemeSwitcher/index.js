import React from "react";
import Divider from "../Divider/index.jsx";
import { ThemeWrapper, Img } from "./style.jsx";

const ThemeSwitcher = () => {
  return (
    <ThemeWrapper>
      <Img src={require("../../assets/sun.svg").default} />
      <Divider />
      <Img src={require("../../assets/moon.svg").default} />
    </ThemeWrapper>
  );
};

export default ThemeSwitcher;
