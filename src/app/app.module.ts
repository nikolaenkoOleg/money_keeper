import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CategoryItemComponent } from './components/category-item/category-item.component';
import { CategoryComponent } from './components/category-block/category-block.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryItemComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
