import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

// Components
import { Countdown } from './components/Countdown';
import { Global } from './components/styles.js';

function App() {
  const [theme, setTheme] = useState({ data: null });

  useEffect(() => {
    fetch('https://api.koala.io/marketing/v1/device-configurations/alias/web-config', {
      method: 'GET',
      headers: {
        'X-Organization-Id': 1,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          const newTheme = result?.data?.data || null;
          setTheme({ data: newTheme });
        },
        (error) => console.log(error)
      );
  }, []);

  return theme.data ? (
    <ThemeProvider theme={theme.data}>
      <Global />
      <Countdown />
    </ThemeProvider>
  ) : null;
}

export default App;
