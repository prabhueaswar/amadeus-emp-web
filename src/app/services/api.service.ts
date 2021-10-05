import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import { catchError } from 'rxjs/operators';
import { AbstractApiService } from "./abstract.api.service";

@Injectable()
export class ApiService extends AbstractApiService {

	constructor(private httpClient: HttpClient) { super(); }

	public Method = {
		GET: "GET",
		POST: "POST",
		PUT: "PUT",
		DELETE: "DELETE",
		PATCH: "PATCH",
	};

	public invokeApi(method: string, url: string, options?: any): Observable<any> {
		return this.httpClient.request(method, url, options).pipe
			(
				catchError((error: any) => Observable.throw(error))
			);
	}
}
