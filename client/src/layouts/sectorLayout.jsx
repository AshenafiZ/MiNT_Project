import React from 'react';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

function SectorLayout({ children }) {
  return (
    <>
      <Navigation role="sector" />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default SectorLayout;
