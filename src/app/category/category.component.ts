import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopupService } from '../services/topup/topup.service';
import { CommonModule } from '@angular/common';
import { CategoryServiceService } from '../services/category-service/category-service.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-category',
  standalone: true,
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
  imports: [RouterLink, CommonModule, PopupComponent],
})
export class CategoryComponent {
  constructor(private categorySrv: CategoryServiceService) {}
  isPopup: boolean = false;
  titlePopup: string = '';
  typePopup: string = '';
  topUps: any = {};
  check: number = 0;
  value: string = '';
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.categorySrv.getCatalog().subscribe({
      next: (Res: any) => {
        this.topUps = Res;
        console.log(this.topUps);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  onCheckboxChange(item: any) {
    // Xử lý khi người dùng thay đổi trạng thái của checkbox
    if (this.check == item.id) {
      this.check = 0;
    } else {
      this.check = item.id;
    }
  }

  delete() {
    if (this.check) {
      this.categorySrv.deleteCatolog(this.check).subscribe({
        next: () => {
          this.getData();
        },
      });
    }
  }

  update(item: any) {
    // Xử lý khi người dùng nhấn vào nút
    this.isPopup = !this.isPopup;
    this.typePopup = 'update';
    this.titlePopup = 'Nhập tên danh mục bạn muốn thêm';
    this.check = item.id;
    this.value = item.catalogName;
  }
  add() {
    // Xử lý khi người dùng nhấn vào nút
    this.isPopup = !this.isPopup;
    this.typePopup = 'add';
    this.titlePopup = 'Nhập tên danh mục mới';
  }

  receiveDataFromChild(data: boolean) {
    this.isPopup = data;
    this.getData();
  }
}
