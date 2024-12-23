import React from 'react';
import Navigation from '../components/navigation';
import Footer from '../components/footer';

function OfficeLayout({ children }) {
  return (
    <>
      <Navigation role="office" />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default OfficeLayout;
