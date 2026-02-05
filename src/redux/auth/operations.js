import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = 'https://connections-api.goit.global';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
}



export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post('/users/signup', credentials);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (e) {
            // Prefer server-provided error info when available
            const serverData = e.response?.data;
            const msg = serverData?.message ?? serverData ?? e.message;
            return thunkAPI.rejectWithValue(msg);
        }
    }
);

export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const response = await axios.post('/users/login', credentials);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (e) {
            const serverData = e.response?.data;
            const msg = serverData?.message ?? serverData ?? e.message;
            return thunkAPI.rejectWithValue(msg);
        }
    }
);

export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
        try {
            await axios.post('/users/logout');
            clearAuthHeader();
        } catch (e) {
            const serverData = e.response?.data;
            const msg = serverData?.message ?? serverData ?? e.message;
            return thunkAPI.rejectWithValue(msg);
        }
    }
);

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue('No valid token');
        }
        
        try {
            setAuthHeader(persistedToken);
            const response = await axios.get('/users/current');
            return response.data;
        } catch (e) {
            const serverData = e.response?.data;
            const msg = serverData?.message ?? serverData ?? e.message;
            return thunkAPI.rejectWithValue(msg);
        }
    }
);