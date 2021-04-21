import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardActions, CardContent, Typography, IconButton } from '@material-ui/core/';
import GitHubIcon from '@material-ui/icons/GitHub';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Tooltip from '@material-ui/core/Tooltip';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Skill = ({ logo, alt, link,width }) => {
    const mobile = useMediaQuery('(max-width:1279px)');

    const [isHover, setIsHover] = useState(false);

    const useStyles = makeStyles({
        root: {
            // maxWidth: '200px',
            // maxWidth: '250px',
            padding:`${mobile ? '10px' : '50px'}`,
            width: '80px',
            height: '80px',
            borderRadius: '10px',
            backgroundColor: '#1f2021'
        },
        img: {
            // height:'110px'
            width: width,
            height: 'auto'
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
            <CardContent style={{ padding: `${mobile ? '15px' : '0px'}` }}>
                <Grid container item justify="center" alignItems="center" >
                    <Grid container item justify="center" alignItems="center" >
                        <img src={logo} alt={alt} className={classes.img} />
                    </Grid>
                </Grid>


            </CardContent>
        </Card >
    </div>
)
}

export default Skill
