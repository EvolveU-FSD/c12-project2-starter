import { useState, createContext, useContext } from "react";

const DarkThemeContext = createContext();

export function useTheme() {
  return useContext(DarkThemeContext);
}

export function ThemeContext({ children }) {
  const [dark, setDark] = useState(false);

  const handleToggleDark = () => {
    setDark((prev) => !prev);
  };

  return (
    <DarkThemeContext.Provider value={{ dark, toggleDark: handleToggleDark }}>
      {children}
    </DarkThemeContext.Provider>
  );
}
