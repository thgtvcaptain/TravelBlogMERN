import mongoose from 'mongoose';
import Post from '../models/post.js';

export const getPosts = async (req, res) => {
    try {

        const posts = await Post.find();

        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const createPost = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;
    
    const newPost = new Post({ title, message, selectedFile, creator, tags });

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.json({message: error.message});
    }  
}

export const updatePost = async (req, res) => {
    const { id} = req.params;

    const updatedPost = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) res.status(404).send({message: 'There is no such id'});

    const post = await Post.findByIdAndUpdate(id, updatedPost);
//
    res.json(post);
}