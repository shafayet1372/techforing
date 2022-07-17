import React, { useState } from 'react'
import { Box } from '@mui/system';
import { createTheme, TextField, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Button } from '@mui/material';
import useStyles from '../style/style';

const initialValue = {
    email: "",
    name: '',
    password: '',
    confirmedPassword: ''
}


export default function Register() {
    const [registration, setRegistrationValue] = useState(initialValue)
    const [error, setError] = useState({})
    const classes = useStyles()
    const { email, password, name, confirmedPassword } = registration
    let navigate = useNavigate();




    const handleChange = (e) => {
        setRegistrationValue({ ...registration, [e.target.name]: e.target.value })
    }


    const successMessage = () => {
        toast.success('Registered Successfully !', {
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


    const createUser = () => {
        const { name, email, password } = registration
        fetch('http://localhost:8000/api/register', {
            method: 'POST',
            body: JSON.stringify({
                name,
                email, password
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(res => res.json()).then(data => {
            setRegistrationValue(initialValue)
            setError({})
            successMessage()
            navigate('/')
        })


    }


    const errorHandler = () => {
        let errors = {}
        const { name, email, password, confirmedPassword } = registration
        if (!name) {
            errors.name = "Name field required !"
        }
        if (!email) {
            errors.email = "Email field required ! "
        }
        if (!password) {
            errors.password = "Password field is required"
        }
        if (password != confirmedPassword) {
            errors.confirmedPassword = "please confirm your password"
        }
        return { hasError: Object.values(errors).length != 0, errors }
    }



    const submitHandler = () => {
        const { hasError, errors } = errorHandler()
        if (hasError) {
            setError(errors)
        } else {

            createUser()

        }

    }



    return <Box className={classes.container}>
        <Box className={classes.form__container}>
            <TextField className={classes.form__input} error={error.name && true} label="Name" variant="standard" name="name" onChange={handleChange} value={name} />

            <TextField className={classes.form__input} error={error.email && true} label="Email" variant="standard" name="email" onChange={handleChange} value={email} />
            <TextField className={classes.form__input} error={error.password && true} label="Password" variant="standard" name="password" onChange={handleChange} value={password} />
            <TextField className={classes.form__input} label="Confirm Password" variant="standard" error={error.confirmedPassword} name="confirmedPassword" onChange={handleChange} value={confirmedPassword} />

            <Button variant="contained" onClick={submitHandler}>Register</Button>

        </Box>

    </Box>
}
