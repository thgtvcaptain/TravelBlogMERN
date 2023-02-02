import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getPosts } from '../../actions/posts';
import { Posts } from '../Posts/Posts';

import { Form } from '../Form/Form';

import { Container, Grow, Grid } from '@mui/material';

const Home = () => {

    const [currentId, setCurrentId] = useState(null);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    }, [currentId, dispatch])

    return ( 
        <Grow in>
            <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId}/>
                </Grid>
                <Grid item xs={12} sm={4}>
                <Form setCurrentId={setCurrentId} currentId={currentId}/>
                </Grid>
            </Grid>
            </Container>
        </Grow> 
      );
}
 
export default Home;