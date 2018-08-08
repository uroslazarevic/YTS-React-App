import React from 'react';
import { NavBar, Footer } from 'components';

const Layout = props => {
   return (
      <div>
        <NavBar />
        <main>
          {props.children}
        </main>
        <Footer />
      </div>
   );
};

export default Layout;