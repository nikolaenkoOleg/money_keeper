import {Component} from '@angular/core';

@Component({
  selector: 'app-add-category-btn',
  templateUrl: './add-category-btn.component.html',
  styleUrls: ['./add-category-btn.component.scss']
})
export class AddCategoryBtnComponent {
  add(): void {
    console.log('added category');
  }
}
