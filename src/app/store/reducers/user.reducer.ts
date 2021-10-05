import { Action, createFeatureSelector } from "@ngrx/store";
import { User } from "../../models/user.model";
import * as actions from "../actions/user.actions";

export interface UserState {
	data: any;
	error?: any;
}

const initialState: UserState = {
	data: false,
	error: null
};

export const userReducer = (state = initialState, incomingAction: Action): any => {
	const action = incomingAction as actions.UserActions;
	switch (action.type) {
		case actions.GET_ALL_USERS:
			return {
				...state
			};
		case actions.GET_ALL_USERS_SUCCESS:
			return {
				...state,
				data: action.payload
			};
		case actions.GET_ALL_USERS_FAIL:
			return {
				...state,
				error: action.payload
			};
		case actions.ADD_USER:
			return {
				...state
			};
		case actions.ADD_USER_SUCCESS:
			return {
				...state,
				data: action.payload
			};
		case actions.ADD_USER_FAIL:
			return {
				...state,
				error: action.payload
			};
		case actions.CHECK_USER_EXIST:
			return {
				...state
			};
		case actions.CHECK_USER_EXIST_SUCCESS:
			return {
				...state,
				data: action.payload
			};
		case actions.CHECK_USER_EXIST_FAIL:
			return {
				...state,
				error: action.payload
			};
		default:
			return state;
	}
};

export const getUsersState = createFeatureSelector<UserState>('userReducer');
export const getUsers = (state: UserState) => state;
export const addNewUser = (state: UserState) => state.data;
export const isUserExist = (state: UserState) => state.data;
