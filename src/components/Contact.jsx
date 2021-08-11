import React from 'react'
import { Grid } from '@material-ui/core/';
import GitHubIcon from '@material-ui/icons/GitHub';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import { MOBILE_SIZE } from '../constants';

const Contact = () => {
    const mobile = useMediaQuery(MOBILE_SIZE);
    const useStyles = makeStyles(theme => ({
        link: {
            textDecoration: 'none',
            color: theme.palette.primary.contrastText,
            fontSize: `${mobile ? '12px' : '16px'}`
        },
        linkIcon: {
            width: `${mobile ? '20px' : '16px'}`
        }
    }));

    const classes = useStyles();

    return (
        <div style={{ fontSize: '12px' }}>
            <div  >
                <Grid container item alignItems="center" wrap="nowrap">
                    <GitHubIcon style={{ marginRight: '5px' }} className={classes.linkIcon} />
                    <a href="https://github.com/rd-code-23" className={classes.link}>@rd-code-23</a>
                </Grid>
            </div>
            <div style={{ marginTop: '0px', padding: '0' }} className={classes.link}>
                <Grid container item alignItems="center" wrap="nowrap">
                    <AlternateEmailIcon style={{ marginRight: '5px' }} className={classes.linkIcon} />
                    rishidholliwar@gmail.com
                </Grid>
            </div>
        </div>
    )
}

export default Contact
