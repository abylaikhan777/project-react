import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  
  const themeClasses = {
    light: {
      hdbg: 'bg-gray-500',
      bg: 'bg-gray-200',
      text: 'text-gray-900',
      button: 'bg-blue-500 hover:bg-blue-600 text-white',
    },
    dark: {
      hdbg: 'bg-gray-800',
      bg: 'bg-gray-900',
      text: 'text-gray-100',
      button: 'bg-blue-600 hover:bg-blue-700 text-white',
    }
  }; 

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeClasses }}>
      {children}
    </ThemeContext.Provider>
  );
}

 export function useTheme() {
  const context = useContext(ThemeContext);
  
  return context;
}