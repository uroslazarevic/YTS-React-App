import React from 'react';
import { Route } from 'react-router-dom';
import { NavBar, Footer } from 'components';

export default function({component: Component, ...rest}) {
   return (
     <Route {...rest} render = {matchProps => (
       <div>
        <NavBar />
        <Component {...matchProps} />
        <Footer />
       </div>
     )} />
   );
};
