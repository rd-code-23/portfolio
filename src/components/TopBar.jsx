import React from 'react';
import headshot from './../images/headshot.png';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import { HashLink as Link } from 'react-router-hash-link';
import Nav from './Nav.jsx'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Contact from './Contact'
const TopBar = () => {
    const useStyles = makeStyles(theme => ({
        paper: {
            // color: theme.palette.text.secondary,
            // backgroundColor: 'black',
            // borderLeft: '2px solid #343a40',
            // borderRight: '2px solid #343a40',
            // borderTop: '1px solid #343a40',
            // borderBottom: '1px solid #343a40',
            // marginTop: '50%'
            // opacity: '1',
            // borderRadius: '6px',
            // height: '200%',
            // width: '15vw',
            border: 'red 1px solid'

        },
        mainContainer: {
            // marginTop: '1%',
            // maxWidth: '100vw'
        },
        link: {
            textDecoration: 'none',
            color: 'white',
            fontSize: '18px'
        },

        linkIcon: {
            width: '16px'
        }

    }));

    const classes = useStyles();
    const mobile = useMediaQuery('(max-width:1279px)');

    return (
        <>
    
            <Grid container  display="column" justify="center" alignItems="center" style={{maxWidth:'85vw' }}>  
                <Grid container item justify="center" alignItems="" style={{ border: '0px solid pink', paddingTop: '15px' }} wrap="nowrap">
                    {/* <Grid item xs={6}></Grid> */}
                    <Grid container item justify="flex-end" style={{ paddingRight: 15, margin: 0, border: '0px solid blue' }}>
                        <img src={headshot} alt="sdsdsd" style={{ width: '50px',height:'50px' }} />

                    </Grid>

                    <Grid container item  display="column" style={{ padding: 0, margin: 0, border: '0px solid green' }}  >
                        <Grid item >

                            <Typography gutterBottom variant="body2" style={{ fontSize: '24px', margin: 0 }} >
                                Rishi Dholliwar
                            </Typography>

                        </Grid>
                        <Grid container item style={{ marginTop: '0px' }}>
                            <Grid item>
                                <Nav />
                            </Grid>
                            <Grid item style={{marginTop:'10px'}}>
                                <Contact />
                            </Grid>

                        </Grid>
                    </Grid>

                    


                </Grid>
             
          
            </Grid >

    









            {/* <Paper className={classes.paper}> */}
            {/* <Grid container style={{ padding: '0px' }}>

                        <Grid container item justify="center" style={{ padding: '0px' }}>
                            <Grid item style={{ padding: '0px' }}>
                                <img src={headshot} alt="sdsdsd" style={{ width: '20px' }} />
                            </Grid>
                        </Grid>

                        <Grid container direction="column" item justify="center">
                            <Grid item>
                                <img src={headshot} alt="asasas" style={{ width: '20px' }} />
                            </Grid>
                        </Grid>

                    </Grid> */}
            {/* </Paper> */}



        </>
    )
}

export default TopBar
