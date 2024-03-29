import React, { useState, useRef } from 'react';
import { Container, Card, CardContent, makeStyles, Grid, TextField, Button } from '@material-ui/core';
import QrReader from 'react-qr-reader'

const UploadToScan = () => {
  const classes = useStyles()
  const qrRef = useRef(null)

    const [ scanResultFile, setScanResultFile ] = useState("");

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

    return (
        <Container>
            <Card>
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
            </Card>
        </Container>
    )
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

export default UploadToScan
