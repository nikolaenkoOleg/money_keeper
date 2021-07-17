import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EntryItemComponent } from './components/entry/entry.component';
import { CategoryComponent } from './components/category-block/category-block.component';
import { AddCategoryBtnComponent } from './components/add-category-btn/add-category-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    EntryItemComponent,
    AddCategoryBtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
