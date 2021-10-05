import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ActionWithPayload } from '../../models/action.model';
import { ApiEndPoints } from '../../services/api.endpoints';
import { ApiService } from '../../services/api.service';
import * as userActions from '../actions/user.actions';

@Injectable()
export class UserEffects {

	constructor(
		private actions$: Actions,
		private apiService: ApiService,
		private endPoints: ApiEndPoints
	) { }

	getUsers$: Observable<ActionWithPayload> = createEffect((): any => this.actions$.pipe
		(
			ofType(userActions.GET_ALL_USERS),
			switchMap((action: ActionWithPayload) => {
				const url = this.endPoints.GetUsers;
				const options = { params: action.payload };
				return this.apiService.invokeApi(this.apiService.Method.GET, url, options).pipe
					(
						map((response: any) => {
							return new userActions.GetAllUsersSuccess(response);
						}),
						catchError((error: any) => of(new userActions.GetAllUsersFail(error)))
					);
			}),
		));

	addUser$: Observable<ActionWithPayload> = createEffect((): any => this.actions$.pipe
		(
			ofType(userActions.ADD_USER),
			switchMap((action: ActionWithPayload) => {
				const url = this.endPoints.AddUser;
				const options = { body: action.payload };
				return this.apiService.invokeApi(this.apiService.Method.POST, url, options).pipe
					(
						map((response: any) => {
							return new userActions.AddUserSuccess(response);
						}),
						catchError((error: any) => of(new userActions.AddUserFail(error)))
					);
			}),
		));

	checkUserExist$: Observable<ActionWithPayload> = createEffect((): any => this.actions$.pipe
		(
			ofType(userActions.CHECK_USER_EXIST),
			switchMap((action: ActionWithPayload) => {
				const url = this.endPoints.IsUserExist + action.payload;
				const options = {};
				return this.apiService.invokeApi(this.apiService.Method.GET, url, options).pipe
					(
						map((response: any) => {
							return new userActions.CheckUserExistSuccess(response);
						}),
						catchError((error: any) => of(new userActions.CheckUserExistFail(error)))
					);
			}),
		));
}
