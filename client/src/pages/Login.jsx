import React, { useState } from 'react'
import { Box } from '@mui/system';
import { TextField, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { NavLink, useNavigate } from "react-router-dom";
import useStyles from '../style/style';
import { toast } from 'react-toastify';


const initialValue = { email: "", password: '' }


export default function Login() {
    const [loginValue, setLoginValue] = useState(initialValue)
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const classes = useStyles()
    const { email, password } = loginValue


    const changeHandler = (e) => {
        setLoginValue({ ...loginValue, [e.target.name]: e.target.value })
    }


    const successMessage = (name) => {
        toast.success(`Welcome ${name}`, {
            position: "top-right",
            autoClose: 800,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
            type: 'success'
        });
    }


    const login = () => {

        const { email, password } = loginValue
        fetch('http://localhost:8000/api/login', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(res => res.json()).then(data => {
            if (data.error) {
                setError(data.error)
            } else {
                localStorage.setItem("access_token", JSON.stringify(data.access_token))
                navigate('/home')
                successMessage(data.userName)
            }

        })




    }



    const errorHandler = () => {
        let errors = ""
        const { email, password } = loginValue
        if (!email) {
            errors = 'please give your login email'
        } else if (!password) {
            errors = 'please give your login password'
        }
        return errors
    }




    const submitHandler = () => {
        const hasError = errorHandler()
        console.log(hasError)
        if (hasError) {
            alert(hasError)
        } else {
            login()
        }
    }


    return <Box className={classes.container}>
        <Box className={classes.form__container}>
            {error && <Typography fontWeight="bold" color="red" textAlign="center">{error}</Typography>}
            <TextField className={classes.form__input} value={email} name="email" label="Email" variant="standard" onChange={changeHandler} />
            <TextField className={classes.form__input} value={password} name="password" label="Password" variant="standard" onChange={changeHandler} />

            <Button variant="contained" onClick={submitHandler}>Login</Button>
            <NavLink className={classes.signup__link} to="/register">Dont have an account ?click here to <strong>Sign up</strong></NavLink>
        </Box>

    </Box>
}
