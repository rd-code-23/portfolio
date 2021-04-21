import React from 'react'
import { Grid, Card, CardActions, CardContent, Typography, IconButton } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles({
    iconStyle: {
        "& > svg": {
            fontSize: '250%',
            marginTop: '5px'
        }

    }
});
const Heading = ({ title, icon }) => {
    const classes = useStyles();
    const mobile = useMediaQuery('(max-width:1279px)');


    return (
        <div>
         
            <Grid container item alignItems="center"    justify={`${mobile ? ('center') : ('flex-start')}`}>
                <Grid item>
                    <div className={classes.iconStyle}>{icon}</div>
                </Grid>
                <Grid item>
                    <Typography variant="h4" component="h2" style={{ padding: '5px', fontFamily: 'Source Sans Pro, sans-serif', whiteSpace: 'pre-line' }}>
                        {title}
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Heading
