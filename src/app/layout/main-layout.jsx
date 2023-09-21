import React from 'react';
import { Footer } from '../home/footer';
import { Navbarweb } from '../home/Navbarweb';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbarweb />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;