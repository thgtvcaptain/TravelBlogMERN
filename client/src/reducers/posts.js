import { createReducer } from '@reduxjs/toolkit';
import { getPosts,createPost, updatePost } from '../actions/posts';


 const initialPosts = [];

export const posts = createReducer(initialPosts, (builder) => {
    builder
        .addCase(getPosts.fulfilled, (state, action) => { 
                return action.payload;
        }).addCase(createPost.fulfilled, (state,action) => {
                return [...state, action.payload];
        }).addCase(updatePost.fulfilled, (state, action) => {
                const newState = state.map((post) => (post._id === action.payload._id ? action.payload : post));
                console.log(newState);
                return newState;
        })
})