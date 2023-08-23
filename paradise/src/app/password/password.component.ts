import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PasswordpopupComponent } from '../passwordpopup/passwordpopup.component';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
  standalone: true,
  imports: [MatIconModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, NgIf],
})
export class PasswordComponent {
  password = new FormControl('', [Validators.required]);

  constructor(private router: Router, private dialog: MatDialog) {}

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a password' : '';
  }

  openPopup(message: string): void {
    const dialogRef = this.dialog.open(PasswordpopupComponent, {
      width: '60%',
      data: {
        message: message,
      }
    });
  }

  onSubmit() {
    if (this.password.valid) {

      const passwordValue = this.password.value;

      const apiUrl = `http://localhost:443/GetPassword/${passwordValue}`;

      fetch(apiUrl, {
        method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            console.log('GET request failed:', response.status);
            throw new Error('Request failed');
          }
        })
        .then((data) => {
          if (data.success) {
            sessionStorage.setItem('passwordEntered', 'true');
            this.router.navigate(['catalog']);
          } else {
            this.router.navigate(['/']);
            this.openPopup("Password does not match.");
          }
        })
        .catch((error) => {
          this.router.navigate(['/']);
          this.openPopup("Server side response error.");
        });

    } else {
      this.openPopup("Not a valid password entry.")
    }
  }
}
