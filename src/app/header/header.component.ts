import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterModelComponent } from '../register-model/register-model.component';
import { ModalService } from '../services/modal.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog, private modelService: ModalService) { }

  ngOnInit(): void {

  }

  openLoginRegisterDialog() {

    this.modelService.openLoginRegisterModal()
  }


}
