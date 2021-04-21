import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, Collapse, CardContent, Typography, IconButton } from '@material-ui/core/';
import GitHubIcon from '@material-ui/icons/GitHub';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Tooltip from '@material-ui/core/Tooltip';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';

const Project = ({ name, description, linkRepo, linkLiveProject }) => {
    const [isHover, setIsHover] = useState(false);
 const mobile = useMediaQuery('(max-width:1279px)');
    const useStyles = makeStyles({
        root: {
            padding: '10px',
            width:  `${mobile ? '20vw' : '40vw'}`,
            minWidth: '180px',
            maxWidth: '550px',
            borderRadius: '10px',
            backgroundColor: '#1f2021'
        },
        media: {
            height: 140,
        },
        onHover: {
            border: `${isHover ? '1px #6c757d solid' : ''}`,
            cursor: `${isHover ? 'pointer' : ''}`
        },
        iconButton: {
            "& .MuiTouchRipple-root span": {
                backgroundColor: 'red!important',
                opacity: .3,
            },
        }
    });

    const classes = useStyles();
   
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const onMouseOver = () => setIsHover(true);
    const onMouseOut = () => setIsHover(false);

    return (
        <div onClick={(e) => { e.stopPropagation(); if (isHover && !mobile) window.open(`${linkLiveProject}`, '_blank') }}  >
            <Card className={`${classes.root} ${classes.onHover}`} elevation={1}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut} >
                <CardContent >
                    <Grid container justify="space-between" wrap={`${mobile ? ('wrap') : ('nowrap')}`}  >
                        <Grid container item justify={`${mobile ? ('center') : ('')}`}>
                            <Typography gutterBottom variant="h6" component="h2">
                                {name}
                            </Typography>
                        </Grid>

                        <Grid container item justify={`${mobile ? ('center') : ('flex-end')}`} alignItems="center" >
                            <Grid item>
                                <div onClick={(e) => { e.stopPropagation(); window.open(`${linkRepo}`, '_blank') }} >

                                    <Tooltip title="See Code">
                                        <IconButton aria-label="delete" className={classes.iconButton} style={{ padding: '5px', marginRight: '4px' }}>
                                            <GitHubIcon />
                                        </IconButton>
                                    </Tooltip>
                                </div>
                            </Grid>

                            <Grid item>
                                <Tooltip title="Open App">
                                <div onClick={(e) => { e.stopPropagation(); window.open(`${linkLiveProject}`, '_blank') }} >
                                        <IconButton aria-label="delete" style={{ padding: '10px' }}>
                                            <PlayArrowIcon />
                                        </IconButton>
                                    </div>
                                </Tooltip>
                            </Grid>

                            {mobile ? (
                                <Grid item >
                                    <IconButton
                                        className={clsx(classes.expand, {
                                            [classes.expandOpen]: expanded,
                                        })}
                                        onClick={handleExpandClick}
                                        aria-expanded={expanded}
                                        aria-label="show more">
                                        <ExpandMoreIcon />
                                    </IconButton>

                                  
                                </Grid>) : ('')}


                        </Grid>
                    </Grid>

                    {mobile ? 
                    (
                        <>
                          <Collapse in={expanded} timeout="auto" unmountOnExit>
                                        <CardContent>
                                            <Typography gutterBottom variant="body1" style={{ padding: '5px', fontSize:'12px' }}>
                                                {description}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis optio cumque molestiae soluta odio corrupti explicabo, dicta quo esse sapiente quibusdam eveniet dolores tempora quas, minima eaque. Porro, sit accusantium!
                       </Typography>
                                        </CardContent>
                                    </Collapse>
                        </>) : 
                        (<Typography gutterBottom variant="body1" style={{ padding: '5px' }}>
                            {description}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis optio cumque molestiae soluta odio corrupti explicabo, dicta quo esse sapiente quibusdam eveniet dolores tempora quas, minima eaque. Porro, sit accusantium!
                        </Typography>)}


                </CardContent>
            </Card >
        </div>
    )
}

export default Project
