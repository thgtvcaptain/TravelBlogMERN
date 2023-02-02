import React from "react";
import { AppBar, Typography, Toolbar, Avatar, Button } from "@mui/material";
import { Link } from 'react-router-dom';
import memories from '../../images/memories.png';
import styles from "./styles";

const Navbar = () => {

    const user = null;
    const logout = () => {
        
    }
    return (
    <AppBar position="static" color="inherit" sx={styles.appBar}>
        <div className={styles.brandContainer}>  
          <Typography component={Link} to="/" variant='h2' align='center' sx={styles.heading}>Memories</Typography>
          <img src={memories} height='60' sx={styles.image} alt='memories'></img>
        </div>
        <Toolbar sx={styles.toolbar}>
            {user ? (
                <div sx={styles.profile}>
                    <Avatar sx={styles.purple} alt={user?.result.name} src={user?.result.imageUrl} />
                    <Typography sx={styles.userName} variant="h6" >{user?.result.name}</Typography>
                    <Button variant="contained" color="secondary" onClick={logout}>Logout</Button>
                </div>
            ) : (
                <Button component={Link} to="/auth" variant="contained" color="primary" >Signin</Button>
            )}
        </Toolbar>
    </AppBar>
)}

export default Navbar;