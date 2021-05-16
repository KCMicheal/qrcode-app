import React, { useState } from 'react';
import { Container, Card, CardContent, makeStyles, Grid, TextField, Button } from '@material-ui/core';
import QRCode from 'qrcode';


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
            <Card>
            <TextField label="Enter text here" onChange={(e) => {setText(e.target.value)}}/>
            <Button className={classes.btn} variant="contained" color="primary" onClick={() => generateQrCode()}>Generate</Button>
              <br/>
              <br/>
              <br/>
            {imageUrl ? ( 
                <a href={imageUrl} download>
                    <img src={imageUrl} alt="img"/>
                </a>) : null}
            </Card>
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
