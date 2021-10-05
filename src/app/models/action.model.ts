import { Action } from '@ngrx/store';

export class ActionWithPayload implements Action {
	type!: string;
	payload: any;
}
