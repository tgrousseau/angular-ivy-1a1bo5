import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [RecipeCardComponent],
  exports: [RecipeCardComponent],
  bootstrap: [RecipeCardComponent],
})
export class ComponentsModule {}
