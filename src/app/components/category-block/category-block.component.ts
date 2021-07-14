import { Component, Input } from '@angular/core';

import { IStats } from './interfaces/category-block.interface';

@Component({
  selector: 'mk-category',
  templateUrl: './category-block.component.html',
  styleUrls: ['./category-block.component.scss'],
})
export class CategoryComponent {
  @Input() title: string;
  @Input() stats: IStats[];
}
