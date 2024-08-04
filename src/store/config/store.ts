import { ReducersMapObject } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema.ts';
import { LoginFormReducer } from '../reducers/LoginFormSlice.ts';
import { UserSliceReducer } from '../reducers/UserSlice.ts';
import { DataReducer } from '../reducers/DataSlice.ts';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        loginForm: LoginFormReducer,
        user: UserSliceReducer,
        data: DataReducer,
    };

    return configureStore({
        reducer: rootReducers,
        preloadedState: initialState,
        devTools: true,
    });
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
