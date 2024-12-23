import React from 'react';
import Navigation from '../components/navigation'; 
import Footer from '../components/footer';

function AdminLayout({ children }) {

  return (
    
    <>
      <Navigation role="admin" />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default AdminLayout;
