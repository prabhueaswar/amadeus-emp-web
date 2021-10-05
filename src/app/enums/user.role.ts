
export enum UserRole {
	SuperAdmin,
	Admin,
	User
}

export const UserRoleLabel = new Map<number, string>([
	[0, 'Super Admin'],
	[1, 'Admin'],
	[2, 'User']
]);
