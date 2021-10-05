import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Params, RouterStateSnapshot } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, createFeatureSelector, MetaReducer } from '@ngrx/store';
import * as fromUser from './user.reducer';

export interface RouterStateUrl {
	url: string;
	queryParams: Params;
	params: Params;
}

export interface State {
	routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
	userReducer: fromUser.UserState;
}

export const reducers: ActionReducerMap<State> = {
	routerReducer: fromRouter.routerReducer,
	userReducer: fromUser.userReducer
}

export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>('routerReducer');


@Injectable()
export class CustomSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl> {
	serialize(routerState: RouterStateSnapshot): RouterStateUrl {
		const { url } = routerState;
		const { queryParams } = routerState.root;
		let state: ActivatedRouteSnapshot = routerState.root;
		while (state.firstChild) { state = state.firstChild; }
		const { params } = state;
		return { url, queryParams, params };
	}
}

export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
	return function (state, action) {
		console.log('state', state);
		console.log('action', action);
		return reducer(state, action);
	};
}

export const metaReducers: MetaReducer<any>[] = [logger];
