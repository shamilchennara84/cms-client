import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmailValidationComponent } from './components/common/email-validation/email-validation.component';
import { PasswordValidationComponent } from './components/common/password-validation/password-validation.component';
import { UsernameValidationComponent } from './components/common/username-validation/username-validation.component';
import { RepeatPasswordValidationComponent } from './components/common/repeat-password-validation/repeat-password-validation.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, EmailValidationComponent, PasswordValidationComponent, UsernameValidationComponent, RepeatPasswordValidationComponent],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule],
})
export class AuthModule {}
