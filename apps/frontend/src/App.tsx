import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import type React from 'react';
import { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import { darkTheme, lightTheme } from './themes';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches;
  });

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <HashRouter>
        <Routes>
          <Route
            element={
              <Layout
                mode={isDarkMode ? 'dark' : 'light'}
                onToggleTheme={toggleTheme}
              />
            }
          >
            <Route index element={<Home />} />
            <Route path="search" element={<SearchPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
