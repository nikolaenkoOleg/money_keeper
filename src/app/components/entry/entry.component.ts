import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewChild} from '@angular/core';

import {IIncome} from '../../store/income/income.reducer';

@Component({
  selector: 'app-entry-item',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntryItemComponent implements AfterViewInit {
  @Input() data: IIncome;

  public titleLength = 10;

  @ViewChild('title') private title: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const titleStr = this.data.entry;
    if (titleStr.length > this.titleLength) {
      this.renderer.setAttribute(this.title.nativeElement, 'title', titleStr);
    }
  }
}
