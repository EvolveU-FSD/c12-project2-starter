import React, { useState, useContext } from "react";
import { useTheme } from "./ThemeContext";

export default function Header() {
  const { dark, toggleDark } = useTheme();

  return (
    <nav className={`app-header ${dark ? "dark" : ""}`}>
      <button onClick={toggleDark}>Make it dark</button>
    </nav>
  );
}
