import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
;

export default function ButtonAppBar() {
    const navigate = useNavigate()



    const logOut = () => {

        localStorage.removeItem('access_token')
        navigate('/')

    }


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" >
                <Toolbar sx={{ display: 'flex', justifyContent: 'end' }}>


                    <Button sx={{ backgroundColor: '#FA9F00' }} onClick={logOut}>Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}