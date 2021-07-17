import { Component, Input } from '@angular/core';

import { IEntryData } from 'src/app/interfaces/mk.interface';

@Component({
  selector: 'mk-entry-item',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
})
export class EntryItemComponent {
  @Input() data: IEntryData;
}
