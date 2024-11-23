import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPosts, fetchUserPosts } from "../../services/postService";

export const fetchPostsThunk = createAsyncThunk(
    'posts/fetchPostsThunk', async (query, {rejectWithValue}) => {
        try {
            const response = await fetchPosts(query, 'title')
            return response.data.items
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const fetchTagPostsThunk = createAsyncThunk(
    'posts/fetchTagPostsThunk', async (query, {rejectWithValue}) => {
        try {
            const response = await fetchPosts(query, 'tag')
            return [response.data.items, query]
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const fetchUserPostsThunk = createAsyncThunk(
    'posts/fetchUserPostsThunk', async ({user_id, display_name}, {rejectWithValue}) => {
        try {
            const response = await fetchUserPosts(user_id)
            return [response.data.items, display_name]
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)