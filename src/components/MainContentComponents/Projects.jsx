import React from 'react';
import { Grid } from '@material-ui/core';
import Project from './Project.jsx';
import AppsIcon from '@material-ui/icons/Apps';
import Heading from './Heading';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Projects = () => {
    const mobile = useMediaQuery('(max-width:1279px)');

    return (
        <div id="projects">

            <Heading title={'Projects'} icon={<AppsIcon />} />

            <Grid container spacing={2} style={{ padding: '25px' }} justify={`${mobile ? ('center') : ('flex-start')}`} >
                <Grid item >
                    <Project
                        name={'Crypto Tracker'}
                        description={`A responsive crypto currency tracker to view the current markets.
                         Built using React, Material UI, React Router and ChartJS. Can add and remove tracking coins as well as change currencies. 
                         Each coin can be clicked on for more details and viewing a history chart. 
                         Future plans include, backend with NodeJS and testing infrastructure with Jest.`}
                        linkRepo={'https://github.com/rd-code-23/crypto_tracker'}
                        linkLiveProject={`https://rd-crypto-tracker.netlify.app/`}
                    />
                </Grid>
                <Grid item >
                    <Project
                        name={'Todo List'}
                        description={`A responsive, full-stack (MERN) todo list app where you can add, delete, edit, complete and filter todos.
                        Users can sign up to save their todos using a custom or google login. 
                         This project also includes testing using Mocha and Docker for containerization.`}
                        linkRepo={'https://github.com/rd-code-23/todo-list-fullstack'}
                        linkLiveProject={`https://rd-todo-list.netlify.app/`}
                    />
                </Grid>
                <Grid item >
                    <Project
                        name={'Open Source Projects'}
                        description={`I have contributed to various open source projects on Github. Click here to see the projects I have
                        contributed to.`}
                        linkRepo={'https://github.com/rd-code-23?tab=repositories&q=&type=fork&language=&sort='}
                        linkLiveProject={``}
                    />
                </Grid>
                <Grid item >
                    <Project
                        name={'Paint'}
                        description={`BetaPaint is desktop application built with Java for creating graphics of the user’s choosing by
                        utilizing features such as drawing tools, a text tool, a paint bucket/fill tool,
                        shapes, lines, and erasers. Users can create their own image or edit existing
                        images that they import to the application. 
                        BetaPaint is a project created by a team of students in Simon Fraser University's
                        CMPT 106 class during the fall 2017 semester.`}
                        linkRepo={'https://github.com/rd-code-23/PaintApp'}
                        linkLiveProject={`https://github.com/rd-code-23/PaintApp#-how-to-run-paint-application-`}
                    />
                </Grid>
            </Grid>

        </div>
    )
}

export default Projects
