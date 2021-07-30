import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardMedia, CardContent, Typography } from '@material-ui/core/';
import SchoolIcon from '@material-ui/icons/School';
import Heading from './Heading';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Education = () => {
    const [isHover, setIsHover] = useState(false);
    const mobile = useMediaQuery('(max-width:1279px)');

    const useStyles = makeStyles({
        root: {
            maxWidth: '400px',
            padding: '10px',
            borderRadius: '10px',
            backgroundColor: '#1f2021',
        },
        img: {
            height: '120px'
        },
        onHover: {
            border: `${isHover ? '1px #6c757d solid' : ''}`,
            cursor: `${isHover ? 'pointer' : ''}`
        },
        media: {
            height: 140,
        },
    });

    const classes = useStyles();
    const onMouseOver = () => setIsHover(true);
    const onMouseOut = () => setIsHover(false);
    return (
        <div id="education">
            <Heading title={'Education'} icon={< SchoolIcon />} />

            <div
                onClick={(e) => { e.stopPropagation(); if (isHover) window.open('https://www.sfu.ca/computing/prospective-students/undergraduate-students/programs/degree-programs/softwaresystems.html', '_blank') }}
                style={{ padding: '25px' }}>
                <Grid container item justify={`${mobile ? ('center') : ('flex-start')}`}>
                    <Card className={`${classes.root} ${classes.onHover}`} elevation={1}
                        onMouseOver={onMouseOver}
                        onMouseOut={onMouseOut} >
                        <CardMedia
                            className={classes.media}
                            image="https://skywindowsltd.com/wp-content/uploads/2020/06/sky_img_blog_12.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent >
                            <Typography gutterBottom variant="h5" component="h2">
                                Major: Software Systems
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                2016-2020
                        </Typography>
                        </CardContent>
                    </Card >
                </Grid>
            </div>
        </div>

    )
}

export default Education
