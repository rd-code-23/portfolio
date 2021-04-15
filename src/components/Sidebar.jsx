import React from 'react'
import headshot from './../images/headshot.png';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    paper: {
        color: theme.palette.text.secondary,
        backgroundColor: '#1e1b18',
        opacity: '1',
        borderRadius: '10px',
        height: '50vh',
        width: '15vw',

    },
    mainContainer: {
        marginTop: '1%',
        maxWidth: '100vw'
    },

}));

const Sidebar = () => {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.paper}>

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
