import { createContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    colors: {
      primary: '#363636',
      background: '#FFFFFF',
    },
  });

  const updateTheme = (newColors) => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      colors: {
        ...prevTheme.colors,
        ...newColors,
      },
    }));
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
