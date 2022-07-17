import React from 'react'
import Router from './Router/Router';
import { Box } from '@mui/system';
import { ToastContainer } from 'react-toastify';

export default function App() {


  return <Box>
    <Router />
    <ToastContainer />
  </Box>
}
