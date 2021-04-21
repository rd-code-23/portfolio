import React, { useEffect, useState } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import Project from './Project.jsx';
import axios from 'axios';
import AppsIcon from '@material-ui/icons/Apps';
import Heading from './Heading';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const Projects = () => {
    const PROJECT_NAMES = ['todo-list', 'crypto_tracker']; //generate all project info with this array
    const [projects, setProjects] = useState([]);
    const mobile = useMediaQuery('(max-width:1279px)');

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const res = await axios.get('https://api.github.com/users/rd-code-23/repos');
                setProjects(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchApi();
    }, [])
    //console.log(projects);
    return (
        <div id="projects">


<Heading title={'Projects'} icon={<AppsIcon />}/>


            <Grid container spacing={2} style={{ padding: '25px' }}  justify={`${mobile ? ('center') : ('flex-start')}`} >
                {projects.map(project => {
                    if (PROJECT_NAMES.includes(project.name)) {
                        return (
                            <Grid item key={project.id}>
                                <Project
                                    name={project.name}
                                    description={project.description}
                                    linkRepo={project.html_url}
                                    linkLiveProject={`https://rd-code-23.github.io/${project.name}/`}
                                />
                            </Grid>
                        )
                    }
                })}
            </Grid>

        </div>
    )
}

export default Projects
