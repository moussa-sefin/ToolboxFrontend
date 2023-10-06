// modal.service.ts
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterModelComponent } from '../register-model/register-model.component';


@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(public dialog: MatDialog) {}

  openLoginRegisterModal(): void {
    const dialogRef = this.dialog.open(RegisterModelComponent, {
      width: '500px', // Set the desired width for your modal
      height:'600px'
    });

    // You can subscribe to dialog events if needed
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });

    
  }

}
