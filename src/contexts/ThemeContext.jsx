import React, { createContext, useState, useContext } from "react";

const themes = {
  theme1: ["#ff6b6b", "#ffe66d", "#f7fff7", "#4ecdc4", "#1a535c"],
  theme2: ["#ff2e63", "#08d9d6", "#ffffff", "#252a34", "#eaeaea"],
  theme3: ["#3462ff", "#5eb525", "#000000", "#f0f0f0", "#f3f4f7"],
  theme4: ["#8d8741", "#659dbd", "#4d4d4d", "#daad86", "#fbeec1"],
};

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.theme1);
  const [selectedTheme, setSelectedTheme] = useState("theme1");

  const updateTheme = (themeKey) => {
    setTheme(themes[themeKey]);
    setSelectedTheme(themeKey);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, themes, selectedTheme, updateTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
