import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import GenerateQrCode from './components/Generate/GenerateQrCode'
// import UploadToScan from './components/UploadToScan';
// import ScanByCamera from './components/ScanByCamera';
import Home from "./Home"


function App() {


  return (
      <Router>
        <Switch>
          <Route exact path="/">/
            <Home/>
          </Route>
          <Route path="/generateqr">
            <GenerateQrCode/>
          </Route>
          {/* <Route path="/upload">
            <UploadToScan/>
          </Route>
          <Route path="/scan">
            <ScanByCamera/>
          </Route> */}
        </Switch>
      </Router>
  );
}



export default App;
