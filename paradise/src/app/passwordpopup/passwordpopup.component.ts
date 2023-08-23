import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-passwordpopup',
  templateUrl: './passwordpopup.component.html',
  styleUrls: ['./passwordpopup.component.css']
})
export class PasswordpopupComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  onClose(): void {
    
  }
}
