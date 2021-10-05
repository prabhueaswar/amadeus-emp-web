import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import { UserRoleLabel } from './enums/user.role';
import { User } from './models/user.model';
import { AddUser, GetAllUsers, State } from './store';
import { addNewUser, getUsers } from './store/selectors';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {

	public title: string = 'Employee Portal';
	public allUsers: any = [];

	public dtOptions: DataTables.Settings = {};

	public firstName: string = "";
	public lastName: string = "";
	public emailId: string = "";
	public userRole: number = 0;
	public isUserFormSubmitted: boolean = false;

	@ViewChild("addUserModal") addUserModal: TemplateRef<HTMLDivElement> | any;
	public modalRef: BsModalRef | any;

	constructor(
		private modalService: BsModalService,
		readonly store$: Store<State>,
	) {
		this.dtOptions = { pagingType: 'full_numbers' };
	}

	ngOnInit(): void {
		this.getAllUsers();
	}

	public showModal(): void {
		this.firstName = "";
		this.lastName = "";
		this.emailId = "";
		this.userRole = 0;
		this.isUserFormSubmitted = false;
		this.modalRef = this.modalService.show(this.addUserModal, {
			animated: true,
			backdrop: "static",
			keyboard: false,
			class: "modal-md modal-dialog-centered"
		});
	}

	public getUserRole(role: any) {
		return UserRoleLabel.get(role);
	}

	public addNewUser(): boolean {
		this.firstName = this.firstName.trim();
		this.lastName = this.lastName.trim();
		this.emailId = this.emailId.trim();
		let element: HTMLSelectElement = document.getElementById("add-user-form") as HTMLSelectElement;
		if (!element.checkValidity()) {
			document.getElementById("submit-add-user")!.click();
			return false;
		}

		this.isUserFormSubmitted = true;

		const payload = new User();
		payload.FirstName = this.firstName;
		payload.LastName = this.lastName;
		payload.EmailId = this.emailId;
		payload.Role = this.userRole;

		this.store$.dispatch(new AddUser(payload));
		this.store$.select(addNewUser).subscribe((response: any) => {
			if (response && response.apiResult == true) {
				this.closeModal();
				this.getAllUsers();
			}
		});

		return false;
	}

	private closeModal(): void {
		this.modalRef!.hide();
	}

	private getAllUsers(): void {
		this.store$.dispatch(new GetAllUsers());
		this.store$.select(getUsers).subscribe((response: any) => {
			if (response && response.data.apiResult != null && response.data.apiResult.length > 0) {
				this.allUsers = response.data.apiResult;
			}
		});
	}

	ngOnDestroy(): void { }
}
