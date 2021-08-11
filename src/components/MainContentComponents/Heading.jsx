import React from 'react'
import { Grid, Typography } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { MOBILE_SIZE } from '../../constants';

const useStyles = makeStyles(theme => ({
    iconStyle: {
        "& > svg": {
            fontSize: '250%',
            marginTop: '5px',
            color: theme.palette.primary.contrastText
        }
    },
    title: {
        padding: '5px',
        fontFamily: 'Source Sans Pro, sans-serif',
        whiteSpace: 'pre-line',
        color: theme.palette.primary.contrastText
    }
}));

const Heading = ({ title, icon }) => {
    const classes = useStyles();
    const mobile = useMediaQuery(MOBILE_SIZE);

    return (
        <Grid container item alignItems="center" justify={`${mobile ? ('center') : ('flex-start')}`}>
            <Grid item>
                <div className={classes.iconStyle}>{icon}</div>
            </Grid>
            <Grid item>
                <Typography variant="h4" component="h2" className={classes.title}>
                    {title}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Heading
