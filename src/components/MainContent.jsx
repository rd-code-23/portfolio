import React from 'react'
import Projects from './MainContentComponents/Projects'
import Skills from './MainContentComponents/Skills';
import Education from './MainContentComponents/Education';

const MainContent = () => {
    return (
        <div style={{ padding: '50px' }}>
            <Projects />
            <Skills />
            <Education />
        </div>
    )
}

export default MainContent
