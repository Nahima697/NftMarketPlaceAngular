import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/_services/auth.service';
import { UsersService } from 'src/app/_services/users.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.sass']
})
export class UpdateUserComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private authService: AuthService
  ) {}

  addUserInfoForm!: FormGroup;
  owner_id: number | undefined;
  @Input() owner?:User

  ngOnInit(): void {
    this.owner_id = this.retrieveOwnerId();
    this.addUserInfoForm = this.formBuilder.group({
      avatar: [this.owner ? this.owner.avatar:'', Validators.required],
      description: [this.owner ? this.owner.description : '', Validators.required]
    });
  }

  updateProfile() {
    if (this.addUserInfoForm.valid && this.owner_id !== undefined) {

      const formData = new FormData();
      formData.append('description', this.addUserInfoForm.get('description')!.value);
      formData.append('avatar', this.addUserInfoForm.get('avatar')!.value, 'avatar');
      formData.append('avatar', this.addUserInfoForm.get('avatar')!.value, this.addUserInfoForm.get('avatar')!.value.name);

      console.log(formData);

      this.usersService.addInfoUser(this.owner_id,formData).subscribe(
        ((response) => {
          console.log('Utilisateur a été mis à jour avec succès :', response);
          this.addUserInfoForm.reset();
        }),
        ((error) => {
          console.error("Problème", error)
        }
      ));
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.addUserInfoForm.get('avatar')?.setValue(file);
  }

  private retrieveOwnerId(): number {
    const id = this.authService.currentUserValue?.user.id || 0;
    return id;
  }
}
