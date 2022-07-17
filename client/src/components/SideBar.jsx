import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { NavLink } from "react-router-dom"
import ListItemText from '@mui/material/ListItemText';
import useStyles from '../style/style';



export default function SideBar() {

    const classes = useStyles()
    return <Box sx={{ width: '100%', padding: '5px', maxWidth: 360, backgroundColor: '#f1c40f42', boxShadow: '0 1px 1px rgb(0 0 0 / 10%)' }}>


        <nav aria-label="secondary mailbox folders">
            <List>
                <NavLink to="/home" className={({ isActive }) =>
                    isActive ? classes.nav__link__active : classes.nav__link
                }>
                    <ListItem disablePadding>
                        <ListItemButton >
                            <ListItemText primary="All Jobs" />
                        </ListItemButton>
                    </ListItem>

                </NavLink>
                <NavLink to="/add-job" className={({ isActive }) =>
                    isActive ? classes.nav__link__active : classes.nav__link
                }>
                    <ListItem disablePadding>
                        <ListItemButton >
                            <ListItemText primary="Add Job" />
                        </ListItemButton>
                    </ListItem>

                </NavLink>
            </List>
        </nav>
    </Box>
}
