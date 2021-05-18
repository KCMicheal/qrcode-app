import { Container, makeStyles, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


const Home = () => {

    const classes =  useStyles();
    return (
        <Container className={classes.window}>
            <div className={classes.nav}>
               <h3>QR CODE APP</h3>
           </div>

           <Grid className={classes.jumbo}>
               <h1>Generate, Upload & Scan</h1>
           </Grid>
           
           <Grid className={classes.grid}>
               <Link to="/generateqr" style={{textDecoration: "none"}}><Button className={classes.btn} variant="outlined" size="large">Generate QR Code</Button></Link>
               <Link to="/upload" style={{textDecoration: "none"}}><Button className={classes.btn} variant="outlined" size="large">Upload & Scan</Button></Link>
               <Link to="/scan" style={{textDecoration: "none"}}><Button className={classes.btn} variant="outlined" size="large">Scan QR Code</Button></Link>
           </Grid>
           
        </Container>
           
    
    )
}

const useStyles = makeStyles((theme) => ({
    window: {
        height: "100vh"
    },
    nav: {
        display: "flex",
        padding: "10px 10px",
        marginBottom: "20px",
        marginTop: "5px",
        background: "transparent",
        // boxShadow: "0px 5px 30px black",
        color: "#fff",
        alignItems: "center",
        textAlign: "center",
        justifyContent: "flex-start",
        borderRadius: "2px",
        width: "95%",
        fontWeight: "bolder",
    },
    jumbo: {
        display: "flex",
        padding: "0px 50% 0px 0px",
        color: "#fff",
        minHeight: "50vh",
        textAlign: "left",
        justifyContent: "left",
        alignItems: "center",
        fontWeight: "900px",
        fontSize: "40px",
        textShadow: "300px",

    },
    grid: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        textAlign: "center",
        padding: "0"
    },
    btn: {
        display: "flex-item",
        color: "#fff",
        borderColor: "#fff"
    }
}))

export default Home
