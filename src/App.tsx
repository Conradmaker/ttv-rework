import React from 'react';
import { Global } from './utils/globalStyle';
import PageLayout from './components/Layout/PageLayout';
import Banner from './components/MainPage/Banner';
import ProgressInfo from './components/MainPage/ProgressInfo';
import VVTDemo from './components/MainPage/VVTDemo';

function App(): JSX.Element {
  return (
    <>
      <Global />
      <PageLayout>
        <Banner />
        <ProgressInfo />
        <VVTDemo />
      </PageLayout>
    </>
  );
}

export default App;
