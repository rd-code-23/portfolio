import React from 'react'
import Projects from './MainContentComponents/Projects'
import Skills from './MainContentComponents/Skills';
import Education from './MainContentComponents/Education';
import WorkExperience from './MainContentComponents/WorkExperience';

const MainContent = () => {
    return (
        <div style={{ padding: '50px' }}>
            <Projects />
            <Skills />
            <WorkExperience />
            <Education />
        </div>
    )
}

export default MainContent
