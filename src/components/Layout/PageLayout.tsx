import React from 'react';
import { PageLayoutContainer } from './styles';
import Header from './Header';
import Footer from './Footer';

type PageLayoutProps = {
  children: React.ReactNode;
};
export default function PageLayout({ children }: PageLayoutProps): JSX.Element {
  return (
    <>
      <Header />
      <PageLayoutContainer>{children}</PageLayoutContainer>
      <Footer />
    </>
  );
}
