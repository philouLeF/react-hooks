import clsx from 'clsx';
import { useReducer, useState, createContext, useContext } from 'react';

const ThemeContext = createContext(null);

const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (context === null) {
    throw new Error('useThemeContext must be used inside a ThemeProvider');
  }

  return context;
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggle = () =>
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  const setDark = () => setTheme('dark');
  const setLight = () => setTheme('light');

  const isDark = theme === 'dark';
  const islight = theme === 'light';

  const values = { theme, toggle, setDark, setLight, isDark, islight };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

const ThemedLayout = ({ children }) => {
  const { isDark } = useThemeContext();

  return (
    <div className={clsx('theme-app', { 'dark-theme-app': isDark })}>
      {children}
    </div>
  );
};

const ForceLightMode = () => {
  const { setLight } = useThemeContext();

  return <button onClick={() => setLight()}>Force light</button>;
};

const ForceDarkMode = () => {
  const { setDark } = useThemeContext();

  return <button onClick={() => setDark()}>Force dark</button>;
};

const ToggleMode = () => {
  const { toggle, isDark } = useThemeContext();

  return <button onClick={toggle}>{isDark ? '🌞' : '🌙'}</button>;
};

const CurrentModeInfo = () => {
  const { theme } = useThemeContext();

  return (
    <div>
      Current theme: <b>{theme}</b>
    </div>
  );
};

const ForceThemeButtons = () => (
  <div style={{ marginTop: 32 }}>
    <ForceLightMode />
    <ForceDarkMode />
  </div>
);

const App = () => {
  const [count, increment] = useReducer((curr) => curr + 1, 0);

  return (
    <div>
      <p>Not in dark mode</p>
      <button onClick={increment}>{count}</button>
      <ThemeProvider>
        <ThemedLayout>
          <ToggleMode />

          <h1>Articles</h1>
          <h3>What is useContext ?</h3>
          <p>
            useContext is used to pass data through the component tree without
            having to pass props down manually at every level.
          </p>
          <hr />
          <CurrentModeInfo />
          <ForceThemeButtons />
        </ThemedLayout>
      </ThemeProvider>
    </div>
  );
};

export default App;
