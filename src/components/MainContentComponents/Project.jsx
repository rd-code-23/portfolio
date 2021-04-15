import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardActions, CardContent, Typography, IconButton } from '@material-ui/core/';
import GitHubIcon from '@material-ui/icons/GitHub';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Tooltip from '@material-ui/core/Tooltip';

const Project = ({ name, description, linkRepo, linkLiveProject }) => {
    const [isHover, setIsHover] = useState(false);

    const useStyles = makeStyles({
        root: {
            minWidth: '400px',
            maxWidth: '700px',
            padding: '10px',
            marginLeft: '20px',
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
    const onMouseOver = () => setIsHover(true);
    const onMouseOut = () => setIsHover(false);

    return (
        <div onClick={(e) => { e.stopPropagation();  if (isHover) window.open(`${linkLiveProject}`, '_blank') }}  >
            <Card className={`${classes.root} ${classes.onHover}`} elevation={1}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut} >
                <CardContent >
                    <Grid container justify="space-between" wrap="nowrap">
                        <Grid container item>
                            <Typography gutterBottom variant="h6" component="h2">
                                {name}
                            </Typography>
                        </Grid>

                        <Grid container item justify="flex-end">
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
                                    <span>
                                        <IconButton aria-label="delete" style={{ padding: '5px' }}>
                                            <PlayArrowIcon />
                                        </IconButton>
                                    </span>
                                </Tooltip>
                            </Grid>

                        </Grid>
                    </Grid>

                    <Typography gutterBottom variant="body1" style={{ padding: '5px', maxWidth: '550px' }}>
                        {description}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis optio cumque molestiae soluta odio corrupti explicabo, dicta quo esse sapiente quibusdam eveniet dolores tempora quas, minima eaque. Porro, sit accusantium!
                       </Typography>

                </CardContent>
            </Card >
        </div>
    )
}

export default Project
