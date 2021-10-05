import { HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";

export abstract class AbstractApiService {
	protected headers = new HttpHeaders({ "Content-Type": "application/json" });
	protected options = { headers: this.headers };

	/**
	 * Handle Http operation that failed
	 * @param operation - name of the operation that failed
	 * @param result - optional value to return as the observable result
	 */
	protected handleError<T>(operation = "operation", result?: T) {
		return (error: any): Observable<T> => {
			// console.error(error);
			// console.log(`${operation} failed: ${error.message}`);

			// Let the app keep running by returning an empty result
			return of(result as T);
		};
	}

	protected handleErrorPromise(error: any) {
		// console.log(error);
		return Promise.reject(error);
	}

	protected handleErrorSilent() {
		return of(null);
	}
}
