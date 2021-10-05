import { Action } from '@ngrx/store';

export const GET_ALL_USERS = '[EmpDir] Get all users';
export const GET_ALL_USERS_SUCCESS = '[EmpDir] Get all users success';
export const GET_ALL_USERS_FAIL = '[EmpDir] Get all users fail';

export const ADD_USER = '[EmpDir] Add user';
export const ADD_USER_SUCCESS = '[EmpDir] Add user success';
export const ADD_USER_FAIL = '[EmpDir] Add user fail';

export const CHECK_USER_EXIST = '[EmpDir] Check user exist';
export const CHECK_USER_EXIST_SUCCESS = '[EmpDir] Check user exist success';
export const CHECK_USER_EXIST_FAIL = '[EmpDir] Check user exist fail';

export class GetAllUsers implements Action {
	readonly type = GET_ALL_USERS;
	constructor() { }
}

export class GetAllUsersSuccess implements Action {
	readonly type = GET_ALL_USERS_SUCCESS;
	constructor(public payload: any) { }
}

export class GetAllUsersFail implements Action {
	readonly type = GET_ALL_USERS_FAIL;
	constructor(public payload: any) { }
}

export class AddUser implements Action {
	readonly type = ADD_USER;
	constructor(public payload: any) { }
}

export class AddUserSuccess implements Action {
	readonly type = ADD_USER_SUCCESS;
	constructor(public payload: any) { }
}

export class AddUserFail implements Action {
	readonly type = ADD_USER_FAIL;
	constructor(public payload: any) { }
}

export class CheckUserExist implements Action {
	readonly type = CHECK_USER_EXIST;
	constructor(public payload: any) { }
}

export class CheckUserExistSuccess implements Action {
	readonly type = CHECK_USER_EXIST_SUCCESS;
	constructor(public payload: any) { }
}

export class CheckUserExistFail implements Action {
	readonly type = CHECK_USER_EXIST_FAIL;
	constructor(public payload: any) { }
}

export type UserActions = GetAllUsers
	| GetAllUsersSuccess
	| GetAllUsersFail
	| AddUser
	| AddUserSuccess
	| AddUserFail
	| CheckUserExist
	| CheckUserExistSuccess
	| CheckUserExistFail;
