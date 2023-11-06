import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/_services/users.service';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.sass'],
})
export class RegisterFormComponent implements OnInit {
  constructor(private fb: FormBuilder,
     private usersService: UsersService,
     private authService:AuthService,
     private router: Router) {}

  registerForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    password1: ['', [Validators.required, Validators.minLength(8)]],
  });

  ngOnInit(): void {}

  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

  get username() {
    return this.registerForm.get('username');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get password1() {
    return this.registerForm.get('password1');
  }

  registerFormSubmit(): void {
    if (this.registerForm.valid) {
      const firstNameValue = this.firstName?.value ?? '';
      const lastNameValue = this.lastName?.value ?? '';
      const usernameValue = this.username?.value ?? '';
      const emailValue = this.email?.value ?? '';
      const passwordValue = this.password?.value ?? '';

        const user: User = {
          firstName: firstNameValue,
          lastName: lastNameValue,
          username: usernameValue,
          email: emailValue,
          plainPassword: passwordValue,
        };
        console.log(user)
        this.usersService.createUser(user).subscribe(
          (response) => {
            console.log(user)
            this.router.navigate(['/auth']);
          },
          (error) => {
            console.error('Erreur lors de la création de l\'utilisateur :', error);
          }
        );
      ;
    }
  }
  registerWithGoogle() {
    window.location.href = 'https://127.0.0.1:8000/connect/google';
  }
}
