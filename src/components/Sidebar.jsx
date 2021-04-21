import React from 'react';
import headshot from './../images/headshot.png';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import { HashLink as Link } from 'react-router-hash-link';
import Contact from './Contact.jsx';
import Nav from './Nav.jsx';

const useStyles = makeStyles({
    paper: {
        marginTop: '50%'
    },
    link: {
        textDecoration: 'none',
        color: 'white',
        fontSize: '18px'
    },
    linkIcon: {
        width: '16px'
    }
});

const Sidebar = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <Grid container direction="column" style={{ padding: '0px' }}>
                <Grid item justify="center">
                    <img src={headshot} alt="headshot" style={{ width: '112px' }} />
                </Grid>
                <Grid item>
                    <Typography variant="h6" style={{ marginTop: '10px', fontFamily: 'Source Sans Pro, sans-serif', whiteSpace: 'pre-line' }}>
                        Rishi
                        Dholliwar
                    </Typography>
                </Grid>

                <Grid item>
                    <div style={{ marginTop: '30px', padding: '0' }}>
                        <Nav />
                    </div>
                </Grid>

                <Grid item>
                    <div style={{ marginTop: '30px', padding: '0' }}>
                        <Contact />
                    </div>
                </Grid>

            </Grid>
        </Paper>
    )
}

export default Sidebar
