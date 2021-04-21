import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { HashLink as Link } from 'react-router-hash-link';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Nav = () => {
    const mobile = useMediaQuery('(max-width:1279px)');

    const useStyles = makeStyles({
        link: {
            textDecoration: 'none',
            color: 'white',
            fontSize: `${mobile ? '20px' : '16px'}`,
            padding: '0px'
        },
        linkIcon: {
            width: '16px'
        }
    });
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
            <Grid container item alignItems="center">
                <SubdirectoryArrowRightIcon className={classes.linkIcon} />
                <Link to="/#education" className={classes.link}>Education</Link>
            </Grid>
        </div>
    )
}

export default Nav
