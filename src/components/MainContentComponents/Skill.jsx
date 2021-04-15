import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardActions, CardContent, Typography, IconButton } from '@material-ui/core/';
import GitHubIcon from '@material-ui/icons/GitHub';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Tooltip from '@material-ui/core/Tooltip';

const Skill = ({ logo, alt, link }) => {
    const [isHover, setIsHover] = useState(false);

    const useStyles = makeStyles({
        root: {
            // maxWidth: '200px',
            // maxWidth: '250px',
            padding: '10px',
           
            borderRadius: '10px',
            backgroundColor: '#1f2021'
        },
        img: {
            height:'110px'
        },
        onHover: {
            border: `${isHover ? '1px #6c757d solid' : ''}`,
            cursor: `${isHover ? 'pointer' : ''}`
        },
    });

    const classes = useStyles();
    const onMouseOver = () => setIsHover(true);
    const onMouseOut = () => setIsHover(false);

    return (
        <div onClick={(e) => { e.stopPropagation(); window.open(`${link}`, '_blank') }}  >
            <Card className={`${classes.root} ${classes.onHover}`} elevation={1}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut} >
                <CardContent >
                    <Grid container justify="center" wrap="nowrap">
                        <Grid item>
                            <img src={logo} alt={alt} className={classes.img}/>
                        </Grid>
                    </Grid>


                </CardContent>
            </Card >
        </div>
    )
}

export default Skill
