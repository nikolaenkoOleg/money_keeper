import {NgModule} from '@angular/core';
import { StoreModule } from '@ngrx/store';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {EntryItemComponent} from './components/entry/entry.component';
import {CategoryComponent} from './components/category-block/category-block.component';
import {AddCategoryBtnComponent} from './components/add-category-btn/add-category-btn.component';
import {LongPipe} from './other/pipes/long.pipe';
import { incomeReducer } from './store/income/income.reducer';
import { reducers, metaReducers } from './store';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    EntryItemComponent,
    AddCategoryBtnComponent,
    LongPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ income: incomeReducer }),
    StoreModule.forRoot(reducers, {
      metaReducers
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
