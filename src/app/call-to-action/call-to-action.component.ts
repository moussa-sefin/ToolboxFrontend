import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.css']
})
export class CallToActionComponent {

  constructor(private modelService: ModalService){}

  openLoginRegisterDialog() {

    this.modelService.openLoginRegisterModal()
  }

}
