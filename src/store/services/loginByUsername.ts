import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from '../../api/Api.ts';
import { UserSliceActions } from '../reducers/UserSlice.ts';

export interface loginByUsernameProps {
    password: string;
    username: string;
}

export interface UserData {
    data: {
        token: string;
    }
}

export const loginByUsername = createAsyncThunk<UserData, loginByUsernameProps>(
    '/loginByUsername',
    async (AuthData, thunkAPI) => {
        try {
            const response = await $api.post('/ru/data/v3/testmethods/docs/login', AuthData);

            if (!response.data.data) {
                throw new Error();
            }
            thunkAPI.dispatch(UserSliceActions.setAuth(response.data));
            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
