import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardActions, CardContent, Typography, IconButton } from '@material-ui/core/';
import GitHubIcon from '@material-ui/icons/GitHub';
import MemoryIcon from '@material-ui/icons/Memory';
import Tooltip from '@material-ui/core/Tooltip';
import Heading from './Heading';
import Skill from './Skill';
const Skills = () => {
    return (
        <div>
            <Heading title={'Skills'} icon={< MemoryIcon />} />
            <div style={{ padding: '25px' }}>
                <Grid container spacing={2}  xs={12} xl={8}>
                    <Grid item>
                        <Skill logo={"https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"}
                            alt={'Javascript'}
                            link={"https://en.wikipedia.org/wiki/JavaScript"} />
                    </Grid>
                    <Grid item>
                        <Skill logo={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"}
                            alt={'React'}
                            link={"https://en.wikipedia.org/wiki/React_(JavaScript_library)"} />
                    </Grid>
                    <Grid item>
                        <Skill
                            logo={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"}
                            alt={'HTML'}
                            link={"https://en.wikipedia.org/wiki/HTML"} />
                    </Grid>
                    <Grid item>
                        <Skill
                            logo={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/1200px-CSS.3.svg.png"}
                            alt={'CSS'}
                            link={"https://en.wikipedia.org/wiki/CSS"} />
                    </Grid>
                    <Grid item>
                        <Skill
                            logo={"https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"}
                            alt={'Git'}
                            link={"https://en.wikipedia.org/wiki/Git"} />
                    </Grid>
                    <Grid item>
                        <Skill
                            logo={"https://material-ui.com/static/logo.png"}
                            alt={'Material UI'}
                            link={"https://material-ui.com/"} />
                    </Grid>
                    <Grid item>
                        <Skill
                            logo={"https://user-images.githubusercontent.com/674621/71187801-14e60a80-2280-11ea-94c9-e56576f76baf.png"}
                            alt={'VS Code'}
                            link={"https://en.wikipedia.org/wiki/Visual_Studio_Code"} />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Skills
