import React from 'react';
import Navigation from '../components/navigation'; 
import Footer from '../components/footer';

function MinisterLayout({ children }) {
  return (
    <>
      <Navigation role="minister" />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default MinisterLayout;
