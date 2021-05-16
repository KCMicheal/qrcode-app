import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container, Card, CardContent, makeStyles, Grid, TextField, Button } from '@material-ui/core';
import './App.css';
import GenerateQrCode from './components/GenerateQrCode'
import UploadToScan from './components/UploadToScan';
import ScanByCamera from './components/ScanByCamera';
import Home from "./Home"

function App() {

  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/generateqr">
            <GenerateQrCode/>
          </Route>
          <Route path="/upload">
            <UploadToScan/>
          </Route>
          <Route path="/scan">
            <ScanByCamera/>
          </Route>
        </Switch>
      </Router>
       
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 10
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
    background: "tomato",
    color: "#000",
    padding: 20
  },
  btn: {
    marginTop: 10,
    marginBottom : 20,
    backgroundColor: 'tomato'
  }
}));

export default App;
