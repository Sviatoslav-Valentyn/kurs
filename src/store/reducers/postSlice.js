import { createSlice } from "@reduxjs/toolkit"
import { fetchPostsThunk, fetchTagPostsThunk, fetchUserPostsThunk } from "../actions/postThunk";

const initialState = {
    posts: [],
    tagPosts: [],
    userPosts: [],
    isLoading: false,
    isTagLoading: false,
    isUserLoading: false,
    errors: null,
    selectedPosts: '',
    tagName: '',
    userName: ''
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setSelectedPost: (state, action) => {
            state.selectedPosts = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostsThunk.pending, (state) => {
                state.isLoading = true;
                state.errors = null;
            })
            .addCase(fetchTagPostsThunk.pending, (state) => {
                state.isTagLoading = true;
                state.errors = null;
            })
            .addCase(fetchUserPostsThunk.pending, (state) => {
                state.isUserLoading = true;
                state.errors = null;
            })
            .addCase(fetchPostsThunk.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = action.payload;
            })
            .addCase(fetchTagPostsThunk.fulfilled, (state, action) => {
                state.isTagLoading = false;
                state.tagPosts = action.payload[0];
                state.tagName = action.payload[1];
            })
            .addCase(fetchUserPostsThunk.fulfilled, (state, action) => {
                state.isUserLoading = false;
                state.userPosts = action.payload[0];
                state.userName = action.payload[1];
            })
            .addCase(fetchPostsThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            })
            .addCase(fetchTagPostsThunk.rejected, (state, action) => {
                state.isTagLoading = false;
                state.errors = action.payload;
            })
            .addCase(fetchUserPostsThunk.rejected, (state, action) => {
                state.isUserLoading = false;
                state.errors = action.payload;
            });
    }
})

export const {setSelectedPost} = postSlice.actions;
export default postSlice.reducer