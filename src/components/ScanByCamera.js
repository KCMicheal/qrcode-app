import React, { useState, useRef } from 'react';
import { Container, Card, CardContent, makeStyles, Grid, TextField, Button } from '@material-ui/core';
import QRCode from 'qrcode';
import QrReader from 'react-qr-reader'

const ScanByCamera = () => {
    const [ scanResultWebCam, setScanResultWebCam ] = useState('')
    const classes = useStyles();
    const qrRef = useRef(null);

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
        <Container>
            <Card>
            <h3>QR Code scan by camera</h3>
              <QrReader
                delay={300}
                style={{width: '100%'}}
                onError={handleErrorWebCam}
                onScan={handleScanWebCam}
              />
              <h3>Scanned by Camera: {scanResultWebCam}</h3>
            </Card>
        </Container>
    )
}

const useStyles = makeStyles((theme) => ({
  
}))

export default ScanByCamera
