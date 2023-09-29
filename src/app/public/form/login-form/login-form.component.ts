import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/_services/users.service';
import { TokenUser, User } from 'src/app/interfaces/user';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {
  submitted = false;
  isLogged = false;
  returnUrl!: string;
  error = '';
  loginForm = this.formBuilder.group({
    username: [
      '',
      [Validators.required, Validators.minLength(4)],
    ],
    password: ['', Validators.required],
  }, );


  loginResponse$!: Observable<any>;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,

  ) {}

  ngOnInit(): void {

  }

  get f() { return this.loginForm.controls; }

  loginFormSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid) {
        return;
    }

    if (this.loginForm.valid) {
      const formData = this.loginForm.value;

        if (formData.username && formData.password) {
           this.authService.login(formData.username, formData.password).subscribe(
            data => {
              const token = data.access_token;
              const user = data.user;
              this.authService.saveToken(token, user);
              }
          );

          this.isLogged = true;
        } else {
        console.error("Veuillez remplir tous les champs.");
        this.router.navigate(['/loginForm']);
      }
    } 

  }
}
