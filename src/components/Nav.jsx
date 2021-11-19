import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { HashLink as Link } from 'react-router-hash-link';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { MOBILE_SIZE } from '../constants';

const Nav = () => {
    const mobile = useMediaQuery(MOBILE_SIZE);

    const useStyles = makeStyles(theme => ({
        link: {
            textDecoration: 'none',
            fontSize: `${mobile ? '20px' : '16px'}`,
            padding: '0px',
            color: theme.palette.primary.contrastText
        },
        linkIcon: {
            width: '16px'
        }
    }));
    const classes = useStyles();

    return (
        <div>
            <Grid container item alignItems="center" wrap="nowrap">
                <SubdirectoryArrowRightIcon className={classes.linkIcon} />
                <Link to="/#projects" className={classes.link} >Projects</Link>
            </Grid>
            <Grid container item alignItems="center" wrap="nowrap" >
                <SubdirectoryArrowRightIcon className={classes.linkIcon} />
                <Link to="/#skills" className={classes.link}>Skills</Link>
            </Grid>
            <Grid container item alignItems="center" wrap="nowrap" >
                <SubdirectoryArrowRightIcon className={classes.linkIcon} />
                <Link to="/#work" className={classes.link}>Work Experience</Link>
            </Grid>
            <Grid container item alignItems="center">
                <SubdirectoryArrowRightIcon className={classes.linkIcon} />
                <Link to="/#education" className={classes.link}>Education</Link>
            </Grid>
        </div>
    )
}

export default Nav
