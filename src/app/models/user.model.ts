import { UserRole } from "../enums/user.role";

export class User {
	Id: number = 0;
	FirstName: string = "";
	LastName: string = "";
	EmailId: string = "";
	Role: UserRole = UserRole.SuperAdmin;

	constructor(model?: User) {
		if (model !== undefined) {
			Object.assign(this, model);
		}
	}
}
