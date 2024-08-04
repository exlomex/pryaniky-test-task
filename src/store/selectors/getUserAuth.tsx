import { createSelector } from '@reduxjs/toolkit';
import { getUser } from './getUser.ts';
import { UserSliceSchema } from '../reducers/UserSliceSchema.ts';

export const getUserAuth = createSelector(
    getUser,
    (user: UserSliceSchema) => user.isAuth,
);
