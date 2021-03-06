import React from 'react';
import headshot from './../images/profile_pic.jpg';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import Contact from './Contact.jsx';
import Nav from './Nav.jsx';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import MyLocation from '@material-ui/icons/MyLocation';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { MOBILE_SIZE } from '../constants';

const Sidebar = () => {
    const isMobile = useMediaQuery(MOBILE_SIZE);

    const useStyles = makeStyles(theme => ({
        paper: {
            marginTop: '50%',
            backgroundColor: isMobile ? '#373a47' : '',
            boxShadow: "none",
            color: theme.palette.primary.contrastText
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
            width: '112px',
            borderRadius: '15px'
        }
    }));

    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Grid container direction="column" style={{ padding: '0px' }}>
                <Grid item >
                    <img src={headshot} alt="headshot" className={classes.profilePic} />
                </Grid>
                <Grid item>
                    <Typography variant="h6" style={{ marginTop: '10px', fontFamily: 'Source Sans Pro, sans-serif', whiteSpace: 'pre-line' }}>
                        Rishi
                        Dholliwar
                    </Typography>
                </Grid>

                <Grid container item direction="row" wrap="nowrap">
                    <Grid item style={{ marginRight: '25px', width: '5px' }} >
                        <WorkOutlineIcon />
                    </Grid>
                    <Grid item >
                        <Typography variant="h6" style={{ fontSize: '14px', marginTop: '0px', fontFamily: 'Source Sans Pro, sans-serif', whiteSpace: 'pre-line' }}>
                            Junior software developer
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container item direction="row" wrap="nowrap">
                    <Grid item style={{ marginRight: '25px', width: '5px' }}>
                        <MyLocation />
                    </Grid>
                    <Grid item >
                        <Typography variant="h6" style={{ fontSize: '14px', marginTop: '0px', fontFamily: 'Source Sans Pro, sans-serif', whiteSpace: 'pre-line' }}>
                            Vancouver, Canada
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item>
                    <div style={{ marginTop: '20px', padding: '0' }}>
                        <Nav />
                    </div>
                </Grid>

                <Grid item>
                    <div style={{ marginTop: '20px', padding: '0' }}>
                        <Contact />
                    </div>
                </Grid>

            </Grid>
        </Paper>
    )
}

export default Sidebar
