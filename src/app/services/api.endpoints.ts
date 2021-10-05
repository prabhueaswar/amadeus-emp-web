import { Injectable } from "@angular/core";

@Injectable()
export class ApiEndPoints {

	constructor() { }

	private baseUri = "https://localhost:44344/v1.0/";

	public GetUsers = this.baseUri + "User/GetUsers";
	public AddUser = this.baseUri + "User/NewUser";
	public IsUserExist = this.baseUri + "User/IsUserExist/";
}
