import * as React from 'react';
import ProjectCard from './components/ProjectCard.jsx';

const About = (props) => {

    return (
        <ProjectCard
            title="Analysis of Gun Violence in the United States 2013-2018"
            text="A data science tutorial walking you through the data science
                    pipeline (data processing and exploratory analysis and even a bit of
                    machine learning) on a gun violence dataset."
        />
    );
};

export default About;