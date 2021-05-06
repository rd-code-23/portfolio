import React from 'react';
import headshot from './../images/profile_pic.jpg';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Nav from './Nav.jsx'
import Contact from './Contact';

const TopBar = () => {
    const useStyles = makeStyles({
        paper: {
            border: 'red 1px solid'
        },
        link: {
            textDecoration: 'none',
            color: 'white',
            fontSize: '18px'
        },
        linkIcon: {
            width: '16px'
        },
        profilePic: {
            width: '70px', 
            height: '60px',
            borderRadius:'5px'
        }
    });

    const classes = useStyles();

    return (
        <Grid container display="column" justify="center" alignItems="center" style={{ maxWidth: '85vw' }}>

            <Grid container item justify="center" style={{ paddingTop: '15px' }} wrap="nowrap">
                <Grid container item justify="flex-end" style={{ paddingRight: 15 }}>
                    <img src={headshot} alt="headshot" className={classes.profilePic} />
                </Grid>

                <Grid container item display="column"  >
                    <Grid item >
                        <Typography gutterBottom variant="body2" style={{ fontSize: '24px' }} >
                            Rishi Dholliwar
                        </Typography>
                    </Grid>

                    <Grid container item >
                        <Grid item>
                            <Nav />
                        </Grid>
                        <Grid item style={{ marginTop: '10px' }}>
                            <Contact />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid >
    )
}

export default TopBar
