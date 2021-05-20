import { Container, makeStyles, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {

    const classes =  useStyles();
    return (
        <Container className={classes.window}>
            <div className={classes.nav}>
               <h3>QR CODE APP</h3>
           </div>

           <Grid className="jumbo">
               <h1>Generate, Upload & Scan</h1>
           </Grid>
           
           <Grid className={classes.grid}>
               <Link to="/generateqr" style={{textDecoration: "none"}}><button className="btn"  size="large">Generate QR Code</button></Link>
               <Link to="/upload" style={{textDecoration: "none"}}><button className="btn"  size="large">Upload & Scan</button></Link>
               <Link to="/scan" style={{textDecoration: "none"}}><button className="btn"  size="large">Scan QR Code</button></Link>
           </Grid>
           <footer className="footer">Copyright by KCM @2021</footer>
        </Container>
           
    
    )
}

const useStyles = makeStyles((theme) => ({
    window: {
       
        overflowX: "hidden",
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
        textShadow: "1px 1px rgba(0, 0, 0, 0.678)",
    },
    grid: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        textAlign: "center",
        padding: "15px",
        flexWrap: "wrap",
    }
}))

export default Home
