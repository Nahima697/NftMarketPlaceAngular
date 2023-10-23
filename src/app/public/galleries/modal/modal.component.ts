import { Component, Input } from '@angular/core';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent {
  @Input() imageUrl: string | null = null;
  @Input() description: string = '';
  constructor(public activeModal: NgbActiveModal) {}
}
