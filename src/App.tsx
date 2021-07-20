import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Global } from './utils/globalStyle';
import PageLayout from './components/Layout/PageLayout';
import Banner from './components/MainPage/Banner';
import ProgressInfo from './components/MainPage/ProgressInfo';
import VVTDemo from './components/MainPage/VVTDemo';

import theme from './utils/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <PageLayout>
        <Banner />
        <ProgressInfo />
        <VVTDemo />
      </PageLayout>
    </ThemeProvider>
  );
}

export default App;
