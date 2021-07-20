import React from 'react';
import { Global } from './utils/globalStyle';
import PageLayout from './components/Layout/PageLayout';
import Banner from './components/MainPage/Banner';
import ProgressInfo from './components/MainPage/ProgressInfo';

function App(): JSX.Element {
  return (
    <>
      <Global />
      <PageLayout>
        <Banner />
        <ProgressInfo />
      </PageLayout>
    </>
  );
}

export default App;
