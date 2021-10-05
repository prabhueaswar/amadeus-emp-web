import { createSelector } from '@ngrx/store';
import * as fromUser from '../reducers/user.reducer';

export const userSelector = createSelector(fromUser.getUsersState, (state: fromUser.UserState) => state);
export const getUsers = createSelector(userSelector, fromUser.getUsers);
export const addNewUser = createSelector(userSelector, fromUser.addNewUser);
export const isUserExist = createSelector(userSelector, fromUser.isUserExist);
