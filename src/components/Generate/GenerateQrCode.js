import React, { useState } from 'react';
import { Container, Grid, makeStyles, TextField, Button } from '@material-ui/core';
import QRCode from 'qrcode';
import './GenerateQrCode.css'

const GenerateQrCode = () => {
    const [ text, setText ] = useState('');
    const [ imageUrl, setImageUrl ] = useState('');
    const classes = useStyles();

    const generateQrCode = async() => {
        try {
          const response = await QRCode.toDataURL(text);
          setImageUrl(response)
        }catch (err) {
          console.log(err)
        }
      }

    return (
        <Container>
            <Grid className="text">
              <TextField label="Enter text, link, phone no. etc" color="secondary" fullWidth id="outlined-basic" variant="outlined" onChange={(e) => {setText(e.target.value)}}/>
            </Grid>
            <Grid className="text1">
              <Button className={classes.btn} variant="contained" color="primary" onClick={() => generateQrCode()}>Generate</Button>
            </Grid>
              <Grid>
              {imageUrl ? ( 
                  <a href={imageUrl} download>
                      <img src={imageUrl} alt="img"/>
                  </a>) : null}
            </Grid>
        </Container>
    )
}

const useStyles = makeStyles((theme) => ({
    card: {
        alignItems: "center",
        display: "flex",
        background: "#fff"
    }
}))

export default GenerateQrCode
