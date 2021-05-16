import React, { useState } from 'react';
import { Container, Card, CardContent, makeStyles, Grid, TextField, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <Container>
            <Link to="/generateqr"><button>Oga</button></Link>
        </Container>
    )
}

export default Home
