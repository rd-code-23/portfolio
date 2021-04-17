import React from 'react'
import headshot from './../images/headshot.png';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import { HashLink as Link } from 'react-router-hash-link';
import Icon from '@material-ui/core/Icon';

import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
const useStyles = makeStyles(theme => ({
    paper: {
        // color: theme.palette.text.secondary,
        // backgroundColor: 'black',
        // borderLeft: '2px solid #343a40',
        // borderRight: '2px solid #343a40',
        // borderTop: '1px solid #343a40',
        // borderBottom: '1px solid #343a40',
        marginTop: '50%'
        // opacity: '1',
        // borderRadius: '6px',
        // height: '200%',
        // width: '15vw',

    },
    mainContainer: {

        // marginTop: '1%',
        // maxWidth: '100vw'
    },
    link: {
        textDecoration: 'none',
        color:'white',
        fontSize:'18px'
    },

    linkIcon: {
        width: '16px'
    }

}));

const Sidebar = () => {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.paper}>
                <Grid container direction="column" style={{ padding: '50px' }}>
                    <Grid container item justify="center">
                        <img src={headshot} alt="picture" style={{ width: '112px' }} />
                    </Grid>
                    <Grid item>
                        <Typography variant="h6" style={{ marginTop: '30px', fontFamily: 'Source Sans Pro, sans-serif', whiteSpace: 'pre-line' }}>
                            Rishi
                            Dholliwar
                        </Typography>
                        <Typography variant="h6" style={{ marginTop: '30px', fontFamily: 'Source Sans Pro, sans-serif', whiteSpace: 'pre-line' }}>
                            Programmer
                        </Typography>
                    </Grid>


                    <div style={{margin:'0',padding:'0'}}>
                    <Grid container item alignItems="center" style={{margin:'0',padding:'0'}}>
                        <SubdirectoryArrowRightIcon className={classes.linkIcon} style={{margin:'0',padding:'0'}}/>
                        <Link to="/#projects" className={classes.link} style={{margin:'0',padding:'0'}}>Projects</Link>
                    </Grid>
                    <Grid container item alignItems="center" style={{margin:'0',padding:'0'}}>
                        <SubdirectoryArrowRightIcon className={classes.linkIcon} />
                        <Link to="/#skills" className={classes.link}>Skills</Link>
                    </Grid>
                    <Grid container item alignItems="center">
                        <SubdirectoryArrowRightIcon className={classes.linkIcon} />
                        <Link to="/#education" className={classes.link}>Education</Link>
                    </Grid>
</div>


                </Grid>
            </Paper>
            {/* <Grid container direction="column" style={{ padding: '50px' }}>
                <Paper className={classes.paper}>
                    <Grid item >
                        <img src={headshot} alt="picture" style={{ width: '112px' }} />
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" component="h2" style={{ marginTop: '30px', fontFamily: 'Source Sans Pro, sans-serif', whiteSpace: 'pre-line' }}>
                            Rishi
                            Dholliwar
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" style={{ marginTop: '20px', fontFamily: 'Lexend, sans-serif' }}>
                            Software Developer
                        </Typography>
                    </Grid>
                    {/* <Grid item>
                    <Typography variant="body2" style={{fontFamily:'Source Sans Pro',textAlign: 'left'}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, blanditiis. Maxime assumenda dicta temporibus consequatur eveniet pariatur necessitatibus commodi voluptatem, veritatis provident quasi voluptas repellat, tempora nostrum corporis soluta. Expedita?
                        </Typography>
                </Grid> 
                </Paper>
            Grid> */}

        </div>
    )
}

export default Sidebar
