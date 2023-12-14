import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface Theme {
  backgroundColor: string;
  color: string;
}

interface ThemeContextProps {
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
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export function useThemeUpdate() {
  const context = useContext(ThemeUpdateContext);
  if (!context) {
    throw new Error('useThemeUpdate must be used within a ThemeProvider');
  }
  return context;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <ThemeContext.Provider value={{ darkTheme }}>
      <ThemeUpdateContext.Provider value={toggleTheme: The}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
