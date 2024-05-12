import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


function MyAppBar() {
    return (
        <AppBar position="static" style={{ backgroundColor: '#2196f3' }}> 
            <Toolbar>
                <Typography variant="h5" component="div">
                User Dashboard 
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default MyAppBar;
