import React from 'react';
import Navigation from '../components/navigation'; 
import Footer from '../components/footer';

function StrategyLayout({ children }) {
  return (   
    <>
      <Navigation role="strategy" />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default StrategyLayout;
