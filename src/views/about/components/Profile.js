import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Profile = (props) => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={4} md={3}>
                    <Avatar alt="Susan Wen" src="./../static/profilepic.jpg" />
                </Grid>
                <Grid item xs={8} md={9}>
                    <Typography>
                        <h2>Hi! I'm Susan Wen</h2>
                        I'm a software engineer and indie game developer, avid lover of storytelling through technology and arts alike.
                    </Typography>

                    <GitHubIcon/>
                    <LinkedInIcon/>
                    
                </Grid>
            </Grid>
        </Box>
    );

};

export default Profile;