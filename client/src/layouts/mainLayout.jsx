import React from 'react';
import Navigation from '../components/navigation'; 
import Footer from '../components/footer';

function MainLayout({ children }) {
  return (
    <>
      <Navigation role="main" />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
