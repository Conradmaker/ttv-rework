import React from 'react';
import { Global } from './utils/globalStyle';
import PageLayout from './components/Layout/PageLayout';

function App(): JSX.Element {
  return (
    <>
      <Global />
      <PageLayout>본문</PageLayout>
    </>
  );
}

export default App;
