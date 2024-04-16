import React, { useState, useContext } from "react";
import { useTheme } from "./ThemeContext";
import { Button, ButtonGroup } from "@mui/material";

export default function Header() {
  const { dark, toggleDark } = useTheme();

  return (
    <nav className={`app-header ${dark ? "dark" : ""}`}>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        >
          <Button onClick={toggleDark}>Make it dark</Button>
        </ButtonGroup>
    </nav>
  );
}
