import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent } from '@material-ui/core/';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { MOBILE_SIZE } from '../../constants';

const Skill = ({ logo, alt, link, width }) => {
    const mobile = useMediaQuery(MOBILE_SIZE);
    const [isHover, setIsHover] = useState(false);

    const useStyles = makeStyles(theme => ({
        root: {
            padding: `${mobile ? '10px' : '50px'}`,
            width: '80px',
            height: '80px',
            borderRadius: '10px',
            backgroundColor: theme.palette.primary.main
        },
        img: {
            width: width,
            height: 'auto'
        },
        onHover: {
            border: `${isHover ? '1px #6c757d solid' : ''}`,
            cursor: `${isHover ? 'pointer' : ''}`
        },
    }));
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
