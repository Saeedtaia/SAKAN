import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { ToastService } from '../../../shared/services/toaster/toast.service';
import { AuthService } from '../../../shared/services/Auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule, NgIf,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;

  constructor(private Router: Router, private toast: ToastService, private fb: FormBuilder, private http: HttpClient, private AuthService: AuthService) {

    this.loginForm = this.fb.group({
      UserName: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }

  signIn() {
    if (this.loginForm.invalid) return;

    this.loading = true;


    const formData = new FormData();
    for (const key in this.loginForm.value) {
      formData.append(key, this.loginForm.value[key]);
      console.log(`${key}: ${this.loginForm.value[key]}`);

    }


    this.AuthService.SignIn(formData).subscribe(
      {
        next: (res) => {
          this.loading = false;
          this.toast.success('login', res.message);
          this.AuthService.saveTokens(res)
          this.Router.navigate(['/Admin']);
        },

      }
    )


  }

}
