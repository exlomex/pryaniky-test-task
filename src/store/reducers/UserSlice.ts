import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserData } from '../services/loginByUsername.ts';
import { UserSliceSchema } from './UserSliceSchema.ts';
import { USER_LOCALSTORAGE_KEY } from '../../const/localstorage.ts';

const initialState: UserSliceSchema = {
    isAuth: false,
};
export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuth: (state: UserSliceSchema, { payload }: PayloadAction<UserData>) => {
            state.isAuth = true;
            localStorage.setItem(USER_LOCALSTORAGE_KEY, payload.data.token);
        },
        logout: (state: UserSliceSchema) => {
            state.isAuth = false;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
        initAuth: (state: UserSliceSchema) => {
            const token = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (token) {
                state.isAuth = true;
            }
        },
    },
});

export const { actions: UserSliceActions } = UserSlice;
export const { reducer: UserSliceReducer } = UserSlice;
