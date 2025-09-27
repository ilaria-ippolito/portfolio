import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { CustomPaddingX } from '../SharedStyles';

const Layout = ({ children }) => (
  <>
    <Header />
    <main style={{ marginTop: '3rem', marginBottom: '3rem' }}>
      <CustomPaddingX>{children}</CustomPaddingX>
    </main>
    <Footer />
  </>
);

export default Layout;
