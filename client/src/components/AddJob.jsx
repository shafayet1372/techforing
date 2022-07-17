import React, { useState } from 'react'

import { Box } from '@mui/system';
import { TextField } from '@mui/material';
import { toast } from 'react-toastify';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import useStyles from '../style/style';

const initialValue = { title: '', description: "" }

export default function AddJob() {
    const [values, setValues] = useState(initialValue)
    const [select, setSelect] = useState("Sales & Marketting")
    const { title, description } = values
    const navigate = useNavigate()
    const classes = useStyles()



    const successMessage = () => {
        toast.success(`jobs added successfully!`, {
            position: "top-right",
            autoClose: 400,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            type: 'success'
        });
    }


    const selectHandler = (event) => {
        setSelect(event.target.value);
    };



    const changeHandler = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }


    const createJob = () => {
        const { title, description } = values
        fetch('http://localhost:8000/api/add-job', {
            method: 'POST',
            body: JSON.stringify({
                title, description, category: select
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(res => res.json()).then(data => {
            setValues(initialValue)
            successMessage()
            navigate('/home')
        })
    }



    const submitHandler = () => {
        createJob()

    }
    return <Box display="flex" justifyContent="center">
        <Box className={classes.form__container}>
            <TextField className={classes.form__input} id="standard-basic" name="title" label="Title" value={title} variant="outlined" onChange={changeHandler} />



            <TextField
                id="outlined-multiline-static"
                value={description}
                name="description"
                label="Description"
                multiline
                rows={4}
                defaultValue=""
                className={classes.form__input} onChange={changeHandler}

            />
            <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                className={classes.form__input}
                //    value={age}
                value={select}
                label="Select Category"
                onChange={selectHandler}
            >
                <MenuItem value="Sales & Marketting">Sales & Marketting</MenuItem>
                <MenuItem value="Creative">Creative</MenuItem>
                <MenuItem value="Human Resource">Human Resource</MenuItem>
                <MenuItem value="Administration">Administration </MenuItem>
                <MenuItem value="Digital Marketing">Digital Marketing </MenuItem>
                <MenuItem value="Development">Development </MenuItem>
                <MenuItem value="Engineering">Engineering </MenuItem>
            </Select>

            <Button variant="contained" color="success" onClick={submitHandler}>Add Job</Button>

        </Box>

    </Box>
}
