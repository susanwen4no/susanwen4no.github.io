import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';

const Profile = (props) => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={4} md={3}>
                    <Avatar alt="Susan Wen" src="../static/profilepic.jpg" />
                </Grid>
                <Grid item xs={8} md={9}>
                    <Typography>
                        <h2>Hi! I'm Susan Wen</h2>
                        I'm a software engineer and indie game developer, avid lover of storytelling through technology and arts alike.
                    </Typography>

                    <Stack direction="row" spacing={1}>
                        <Tooltip title="LinkedIn" arrow>
                            <IconButton href="https://www.linkedin.com/in/susan-wen-5a9a04195/">
                                <LinkedInIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="GitHub" arrow>
                            <IconButton href="https://github.com/susanwen4no">
                                <GitHubIcon />
                            </IconButton>
                        </Tooltip>
                    </Stack>

                </Grid>
            </Grid>
        </Box>
    );

};

export default Profile;