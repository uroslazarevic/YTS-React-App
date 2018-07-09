import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from '../components/navbar';
import Footer from './footer';

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
