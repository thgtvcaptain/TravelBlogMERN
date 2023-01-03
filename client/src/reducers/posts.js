import { createReducer } from '@reduxjs/toolkit';
import { getPosts, createPost, updatePost, deletePost } from '../actions/posts';


 const initialPosts = [];

export const posts = createReducer(initialPosts, (builder) => {
    builder
        .addCase(getPosts.fulfilled, (state, action) => { 
                return action.payload;
        }).addCase(createPost.fulfilled, (state,action) => {
                return [...state, action.payload];
        }).addCase(updatePost.fulfilled, (state, action) => {
                return state.map((post) => (post._id === action.payload._id ? action.payload : post));
        }).addCase(deletePost.fulfilled, (state, action) => {
                return state.filter((post) => post._id !== action.payload)
        })
})