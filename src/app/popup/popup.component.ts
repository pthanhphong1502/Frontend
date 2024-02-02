import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoryServiceService } from '../services/category-service/category-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
})
export class PopupComponent {
  @Input() title: string = '';
  @Input() type: string = '';
  @Input() isPopupClose: boolean = false;
  @Output() dataEvent = new EventEmitter<boolean>();
  @Input() value: string = '';
  @Input() id: number = 0;

  constructor(private categorySrv: CategoryServiceService) {}

  submit() {
    this.isPopupClose = false;

    if (this.type == 'add') {
      this.categorySrv.addCatolog(this.value).subscribe({
        next: (Res: any) => {
          this.value = '';
          this.dataEvent.emit(this.isPopupClose);
        },
      });
    }
    else {
      this.categorySrv.updateCatolog(this.id, this.value).subscribe({
        next: (Res: any) => {
          this.value = '';
          this.dataEvent.emit(this.isPopupClose);
        },
      });
    }

  }
  close() {
    this.dataEvent.emit(this.isPopupClose);
  }
}
