import React from 'react'
import headshot from './../images/headshot.png';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import { HashLink as Link } from 'react-router-hash-link';
import Icon from '@material-ui/core/Icon';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Nav = () => {
    const mobile = useMediaQuery('(max-width:1279px)');
    const useStyles = makeStyles(theme => ({

        link: {
            textDecoration: 'none',
            color: 'white',
            fontSize: `${mobile ? '20px' : '16px'}`,
            padding: '0'
        },

        linkIcon: {
            width: '16px'
        }

    }));
    const classes = useStyles();
    

    return (
        <div>
            <Grid container item alignItems="center" style={{ margin: '0', padding: '0' }} wrap="nowrap">
                <SubdirectoryArrowRightIcon className={classes.linkIcon} style={{ margin: '0', padding: '0' }} />
                <Link to="/#projects" className={classes.link} style={{ margin: '0', padding: '0' }}>Projects</Link>
            </Grid>
            <Grid container item alignItems="center" style={{ margin: '0', padding: '0' }} wrap="nowrap" >
                <SubdirectoryArrowRightIcon className={classes.linkIcon} />
                <Link to="/#skills" className={classes.link}>Skills</Link>
            </Grid>
            <Grid container item alignItems="center">
                <SubdirectoryArrowRightIcon className={classes.linkIcon} />
                <Link to="/#education" className={classes.link}>Education</Link>
            </Grid>
        </div>
    )
}

export default Nav
