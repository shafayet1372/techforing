import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { Box, Container } from '@mui/system'
import Grid from '@mui/material/Grid';
import SideBar from '../components/SideBar';
import JobsView from '../components/JobsView';
import { toast } from 'react-toastify';
export default function Home() {



    const [jobs, setJobs] = useState([])


    const successMessage = () => {
        toast.success(`Job Deleted Successfully`, {
            position: "top-right",
            autoClose: 400,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            type: 'warning'
        });
    }


    const getAllJobs = () => {
        fetch('http://localhost:8000/api/getalljobs')
            .then((response) => response.json())
            .then((json) => {
                setJobs([...json.jobs])
            });
    }



    useEffect(() => {
        getAllJobs()
    }, [])



    const deleteJob = (id) => {


        let remove = window.confirm("Are you sure?");
        if (remove) {
            fetch(`http://localhost:8000/api/delete/${id}`, {
                method: 'DELETE',
            }).then(data => data.json()).then(data => {
                getAllJobs()
            })
        }

    }



    let filterByCategory = (data) => {
        let categories = data.reduce((acc, val) => {

            if (acc[val.category]) {

                acc[val.category].push(val)
            } else {
                acc[val.category] = []
                acc[val.category].push(val)
            }
            return acc
        }, {})
        return Object.entries(categories)
    }



    let showData = () => {

        let filteredJobs = filterByCategory(jobs).sort((a, b) => a[0] < b[0] ? -1 : 1)


        return <JobsView jobs={filteredJobs} deleteHandler={deleteJob} />
    }



    return <Box>
        <Navbar />

        <Container maxWidth="lg" >
            <Grid container spacing={3} mt={5}>
                <Grid item xs={4}>
                    <SideBar />
                </Grid>
                <Grid item xs={8}>
                    {showData()}

                </Grid>

            </Grid>
        </Container>


    </Box>
}
