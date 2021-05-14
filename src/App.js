import React, { useState, useRef } from 'react';
import { Container, Card, CardContent, makeStyles, Grid, TextField, Button } from '@material-ui/core';
import './App.css';
import QRCode from 'qrcode';
import QrReader from 'react-qr-reader'

function App() {
  const [ text, setText ] = useState('');
  const [ imageUrl, setImageUrl ] = useState('');
  const [ scanResultFile, setScanResultFile ] = useState("");
  const [ scanResultWebCam, setScanResultWebCam ] = useState('')
  const classes = useStyles();
  const qrRef = useRef(null)

  const generateQrCode = async() => {
    try {
      const response = await QRCode.toDataURL(text);
      setImageUrl(response)
    }catch (err) {
      console.log(err)
    }
  }
  
  const handleErrorFIle = (error) => {
    console.log(error);
  }

  const handleScanFIle = (result) => {
    if (result) {
      setScanResultFile(result)
    }
  }

  const onScanFile = () => {
    qrRef.current.openImageDialog()
  }

  const handleErrorWebCam = (error) => {
    console.log(error)
  }

  const handleScanWebCam = (result) => {
    if (result) {
      setScanResultWebCam(result)
    }
  }
  return (
    <Container className={classes.container}>
      <Card>
        <h2 className={classes.title}>Generate Download & Scan QR Code with React js</h2>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item x1={4} lg={4} md={6} sm={12} xs={12}>
              <TextField label="Enter text here" onChange={(e) => {setText(e.target.value)}}/>
              <Button className={classes.btn} variant="contained" color="primary" onClick={() => generateQrCode()}>Generate</Button>
              <br/>
              <br/>
              <br/>
              {imageUrl ? ( 
                <a href={imageUrl} download>
                    <img src={imageUrl} alt="img"/>
                </a>) : null}
            </Grid>
            <Grid item x1={4} lg={4} md={6} sm={12} xs={12}>
              <Button className={classes.btn} variant="contained" color="secondary" onClick={onScanFile}>Scan Qr Code</Button>
              <QrReader
                  ref={qrRef}
                  delay={300}
                  style={{width: '100%'}}
                  onError={handleErrorFIle}
                  onScan={handleScanFIle}
                  legacyMode
              />
              <h3>Scanned code: {scanResultFile}</h3>
            </Grid>
            <Grid item x1={4} lg={4} md={6} sm={12} xs={12}>
              <h3>QR Code scan by camera</h3>
              <QrReader
                delay={300}
                style={{width: '100%'}}
                onError={handleErrorWebCam}
                onScan={handleScanWebCam}
              />
              <h3>Scanned by Camera: {scanResultWebCam}</h3>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
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
