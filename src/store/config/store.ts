import { ReducersMapObject } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema.ts';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
    };

    return configureStore({
        reducer: rootReducers,
        preloadedState: initialState,
        devTools: true,
    });
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
