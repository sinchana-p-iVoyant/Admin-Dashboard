import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface Theme {
  backgroundColor: string;
  color: string;
}

interface c {
  darkTheme: boolean;
}

interface ThemeUpdateContextProps {
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
const ThemeUpdateContext = createContext<Dispatch<SetStateAction<boolean>> | undefined>(undefined);

export const lightThemeStyles: Theme = {
  backgroundColor: "#dde6ed",
  color: '#27374D',
};

export const darkThemeStyles: Theme = {
  backgroundColor: "#27374D",
  color: "#dde6ed",
};

export function useTheme() {
  return useContext(ThemeContext);
 
}

export function useThemeUpdate() {
 return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <ThemeContext.Provider value={{ darkTheme }: The}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
