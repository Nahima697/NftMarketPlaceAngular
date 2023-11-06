import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { UsersService } from 'src/app/_services/users.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.sass']
})
export class UserUpdateComponent implements OnInit{
  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router
  ) {}

  updateUserForm!: FormGroup;
  owner_id: number | undefined;
  @Input() owner?:User

  ngOnInit(): void {
    this.owner_id = this.retrieveOwnerId();
    this.updateUserForm = this.formBuilder.group({
      username: [this.owner ? this.owner.username:'', Validators.required],
      password: [this.owner ? this.owner.password : '', Validators.required]
    });
  }
  get username() {
    return this.updateUserForm.get('username');
  }

  get password() {
    return this.updateUserForm.get('password');
  }
  onSubmit() {
    if (this.updateUserForm.valid && this.owner_id !== undefined) {
      const usernameValue = this.username?.value || '';
      const passwordValue = this.password?.value || '';

      this.usersService.updateUser(this.owner_id,usernameValue,passwordValue).subscribe(
        ((response) => {
          console.log('Utilisateur a été mis à jour avec succès :', response);
          this.router.navigate(['/user/connectedUser']);
        }),
        ((error) => {
          console.error("Problème", error)
        }
      ));
    }
  }


  private retrieveOwnerId(): number {
    const id = this.authService.currentUserValue?.user.id;
    return id;
  }
}
