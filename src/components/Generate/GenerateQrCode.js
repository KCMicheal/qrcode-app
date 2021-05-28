import React, { useState } from 'react';
import { Container, Grid, TextField } from '@material-ui/core';
import QRCode from 'qrcode';
import './GenerateQrCode.css'

const GenerateQrCode = () => {
    const [ text, setText ] = useState('');
    const [ imageUrl, setImageUrl ] = useState('');
    

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
              <TextField label="Enter text, link, etc" color="primary" id="outlined-basic" fullWidth variant="outlined" onChange={(e) => {setText(e.target.value)}}/>
            </Grid>
            <Grid className="text1">
              <button className="btn" onClick={() => generateQrCode()}>Generate</button>
            </Grid>
              <Grid className="image">
              {imageUrl ? ( 
                  <a href={imageUrl} download>
                      <img src={imageUrl} alt="img"/>
                  </a>) : null}
            </Grid>
        </Container>
    )
}



export default GenerateQrCode
