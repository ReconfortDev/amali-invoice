import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-left-modal',
  templateUrl: './left-modal.component.html',
  styleUrl: './left-modal.component.css'
})
export class LeftModalComponent {
  @Input() title! :string;
  @Input() openModal! :boolean;
  @Output() toggleModal = new EventEmitter();

  onToggleModal(){
    this.toggleModal.emit();
  }
}
