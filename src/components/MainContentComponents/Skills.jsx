import React from 'react'
import { Grid } from '@material-ui/core/';
import MemoryIcon from '@material-ui/icons/Memory';
import Heading from './Heading';
import Skill from './Skill';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import css_logo from './../../images/skills/css.png'
import git_logo from './../../images/skills/git.png'
import html_logo from './../../images/skills/html.png'
import js_logo from './../../images/skills/javascript.png'
import mui_logo from './../../images/skills/mui.png'
import react_logo from './../../images/skills/react.png'
import vscode_logo from './../../images/skills/vscode.png'
import jest_logo from './../../images/skills/jest.png'
import docker_logo from './../../images/skills/docker.png'
import node_logo from './../../images/skills/node.png'
import sql_logo from './../../images/skills/sql.png'

const Skills = () => {
    const mobile = useMediaQuery('(max-width:1279px)');
    const WIDTH = mobile ? (45) : (95);

    return (
        <div id="skills">
            <Heading title={'Skills'} icon={< MemoryIcon />} />
            <div style={{ padding: '25px' }}>
                <Grid container item spacing={1} lg={11} justify={`${mobile ? ('center') : ('')}`}   >
                    <Grid item>
                        <Skill logo={js_logo}
                            alt={'Javascript'}
                            link={"https://en.wikipedia.org/wiki/JavaScript"}
                            width={WIDTH - 5} />
                    </Grid>
                    <Grid item>
                        <Skill logo={react_logo}
                            alt={'React'}
                            link={"https://en.wikipedia.org/wiki/React_(JavaScript_library)"}
                            width={WIDTH} />
                    </Grid>
                    <Grid item>
                        <Skill
                            logo={html_logo}
                            alt={'HTML'}
                            link={"https://en.wikipedia.org/wiki/HTML"}
                            width={WIDTH} />
                    </Grid>
                    <Grid item>
                        <Skill
                            logo={css_logo}
                            alt={'CSS'}
                            link={"https://en.wikipedia.org/wiki/CSS"}
                            width={WIDTH} />
                    </Grid>
                    <Grid item>
                        <Skill
                            logo={git_logo}
                            alt={'Git'}
                            link={"https://en.wikipedia.org/wiki/Git"}
                            width={WIDTH} />
                    </Grid>
                    <Grid item>
                        <Skill
                            logo={mui_logo}
                            alt={'Material UI'}
                            link={"https://material-ui.com/"}
                            width={WIDTH + 10} />
                    </Grid>
                    <Grid item>
                        <Skill
                            logo={vscode_logo}
                            alt={'VS Code'}
                            link={"https://en.wikipedia.org/wiki/Visual_Studio_Code"}
                            width={WIDTH - 10} />
                    </Grid>
                    <Grid item>
                        <Skill
                            logo={jest_logo}
                            alt={'Jest'}
                            link={"https://en.wikipedia.org/wiki/Jest_(JavaScript_framework)"}
                            width={WIDTH - 5} />
                    </Grid>
                    <Grid item>
                        <Skill
                            logo={docker_logo}
                            alt={'Docker'}
                            link={"https://en.wikipedia.org/wiki/Docker_(software)"}
                            width={WIDTH} />
                    </Grid>
                    <Grid item>
                        <Skill
                            logo={node_logo}
                            alt={'Node'}
                            link={"https://en.wikipedia.org/wiki/Node.js"}
                            width={WIDTH - 10} />
                    </Grid>
                    <Grid item>
                        <Skill
                            logo={sql_logo}
                            alt={'SQL'}
                            link={"https://en.wikipedia.org/wiki/MySQL"}
                            width={WIDTH + 40} />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Skills
