import React,{ Component } from 'react';

import NavBar from '../components/navbar';
import YTSDescription from '../components/yts_description';
import PopularDownloads from '../containers/popular_downloads';

export default class App extends Component {
 render() {
   return (
     <div>
      <NavBar />
      <div className="home-content">
          <YTSDescription />
          <PopularDownloads />
      </div>
     </div>
   )
 }
};