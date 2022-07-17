import React from 'react'
import Navbar from '../components/Navbar'
import { Box, Container } from '@mui/system'
import Grid from '@mui/material/Grid';
import SideBar from '../components/SideBar'
import AddJob from '../components/AddJob';


export default function CreateJob() {
    return <Box>
        <Navbar />

        <Container maxWidth="lg" >
            <Grid container spacing={3} mt={5}>
                <Grid item xs={4}>
                    <SideBar />
                </Grid>
                <Grid item xs={8}>
                    <AddJob />
                </Grid>

            </Grid>
        </Container>


    </Box>
}
