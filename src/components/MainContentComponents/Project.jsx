import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, Collapse, CardContent, Typography, IconButton } from '@material-ui/core/';
import GitHubIcon from '@material-ui/icons/GitHub';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Tooltip from '@material-ui/core/Tooltip';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import { MOBILE_SIZE } from '../../constants';

const Project = ({ name, description, linkRepo, linkLiveProject }) => {
    const [isHover, setIsHover] = useState(false);
    const mobile = useMediaQuery(MOBILE_SIZE);

    const useStyles = makeStyles(theme => ({
        root: {
            padding: '10px',
            width: `${mobile ? '60vw' : '40vw'}`,
            minWidth: '180px',
            maxWidth: '550px',
            borderRadius: '10px',
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText
        },
        onHover: {
            border: `${isHover ? '1px #6c757d solid' : ''}`,
            cursor: `${isHover ? 'pointer' : ''}`
        },
        iconButton: {
            color: theme.palette.primary.contrastText
        }
    }));

    const classes = useStyles();

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const onMouseOver = () => setIsHover(true);
    const onMouseOut = () => setIsHover(false);

    return (
        <div onClick={(e) => { e.stopPropagation(); if (isHover && !mobile) window.open(`${linkLiveProject !== '' ? linkLiveProject : linkRepo}`, '_blank') }}  >
            <Card className={`${classes.root} ${classes.onHover}`} elevation={1}
                onMouseOver={onMouseOver}
                onMouseOut={onMouseOut} >
                <CardContent >
                    <Grid container justify="space-between" wrap={`${mobile ? ('wrap') : ('nowrap')}`}  >
                        <Grid container item justify={`${mobile ? ('center') : ('flex-start')}`}>
                            <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: 'center' }}>
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
                                {linkLiveProject !== '' &&
                                    <Tooltip title="Open App">
                                        <div onClick={(e) => { e.stopPropagation(); window.open(`${linkLiveProject}`, '_blank') }} >
                                            <IconButton aria-label="delete" className={classes.iconButton} style={{ padding: '10px' }}>
                                                <PlayArrowIcon />
                                            </IconButton>
                                        </div>
                                    </Tooltip>
                                }
                            </Grid>

                            {mobile ?
                                (
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
                                    </Grid>
                                ) :
                                ('')
                            }
                        </Grid>
                    </Grid>

                    {mobile ?
                        (
                            <>
                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography gutterBottom variant="body1" style={{ fontSize: '14px' }}>
                                            {description}
                                        </Typography>
                                    </CardContent>
                                </Collapse>
                            </>
                        ) :
                        (
                            <Typography gutterBottom variant="body1" style={{ padding: '5px' }}>
                                {description}
                            </Typography>
                        )
                    }
                </CardContent>
            </Card >
        </div>
    )
}

export default Project
