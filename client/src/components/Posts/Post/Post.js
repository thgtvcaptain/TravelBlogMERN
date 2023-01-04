import React from "react";

import moment from 'moment';

import {Card, CardMedia, CardContent, CardActions, Button, Typography, Box } from '@mui/material';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';

import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts';

import styles from './styles';

export const Post = ({ post, setCurrentId }) => {

    const dispatch = useDispatch();

    return (
        <Card sx={styles.card}>
            <CardMedia sx={styles.media} image={post.selectedFile} title={post.title}/>
        <Box sx={styles.overlay}>
            <Typography variant="h6">{post.creator}</Typography>
            <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </Box>
        <Box sx={styles.overlay2}>
            <Button 
                style={{ color: 'white' }} 
                size="small" 
                onClick={() => {setCurrentId(post._id)}}
            >
            <MoreHorizIcon />
            </Button>
        </Box>
        <Box sx={styles.details}>
            <Typography variant="body2" color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
        </Box>
        <Typography sx={styles.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
        </CardContent>
        <CardActions sx={styles.cardActions}>
            <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon /> Like {post.likeCount}</Button>
            <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon /> Delete</Button>
        </CardActions>
        </Card>
        
    )
}