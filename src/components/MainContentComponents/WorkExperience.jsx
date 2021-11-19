import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardMedia, CardContent, Typography } from '@material-ui/core/';
import WorkIcon from '@material-ui/icons/Work';
import Heading from './Heading';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { MOBILE_SIZE } from '../../constants';
import corcus_logo from "../../images/corcus.png";

const WorkExperience = () => {
    const [isHover, setIsHover] = useState(false);
    const mobile = useMediaQuery(MOBILE_SIZE);

    const useStyles = makeStyles(theme => ({
        root: {
            // minWidth: '400px',
            padding: '10px',
            borderRadius: '10px',
            backgroundColor: theme.palette.primary.main,
        },
        img: {
            height: '120px'
        },
        onHover: {
            border: `${isHover ? '1px #6c757d solid' : ''}`,
            cursor: `${isHover ? 'pointer' : ''}`
        },
        media: {
            height: 140
        },
    }));

    const classes = useStyles();
    const onMouseOver = () => setIsHover(true);
    const onMouseOut = () => setIsHover(false);

    return (
        <div id="work">
            <Heading title={'Work Experience'} icon={< WorkIcon />} />

            <div
                onClick={(e) => { e.stopPropagation(); if (isHover) window.open('https://www.linkedin.com/company/corcus/about/', '_blank') }}
                style={{ padding: '25px' }}>
                <Grid container item justify={`${mobile ? ('center') : ('flex-start')}`}>
                    <Card className={`${classes.root} ${classes.onHover}`} elevation={1}
                        onMouseOver={onMouseOver}
                        onMouseOut={onMouseOut} >
                        <CardMedia
                            className={classes.media}
                            image={corcus_logo}
                            title="Contemplative Reptile"
                        />
                        <CardContent >
                            <Typography gutterBottom variant="h5" component="h2">
                                Corcus
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                3 month contract
                            </Typography>
                        </CardContent>
                    </Card >
                </Grid>
            </div>
        </div>
    )
}

export default WorkExperience
