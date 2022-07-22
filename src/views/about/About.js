import * as React from 'react';
import Profile from './components/Profile.js';
import ProjectCard from './components/ProjectCard.js';
import Container from "@mui/material/Container";

const About = (props) => {

    return (
        <Container maxWidth="md">
            <div>
                <Profile />

            </div>
        </Container>
    );
};

export default About;