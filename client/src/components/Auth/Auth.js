import React, {useState} from 'react';
import { Typography, Avatar, Button, Paper, Grid, Container } from "@mui/material";

import LockOutlinedIcon from '@mui/icons-material/LockOpenOutlined';

import Input from './Input';

import styles from './styles';

const Auth = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);

    const handleChange = () => {}

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleSubmit = () => {

    }

    const switchMode = () => {
        setIsSignup(!isSignup);
    }

    return ( 
        <Container component="main" maxWidth="xs">
            <Paper sx={styles.paper} elevation={3}>
                <Avatar xs={styles.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form xs={styles.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {   isSignup && (
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                            </>    
                            )}
                            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword}/>
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" sx={styles.submit}>
                        { isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignup ? 'Already have account? Sign in' : 'Dont have account? Sign up' }
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
}
 
export default Auth;