import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ComponentsModule } from '../components/components.module';
import { RecipesService } from '../services/recipes.service';

@NgModule({
  imports: [BrowserModule, FormsModule, ComponentsModule],
  providers: [RecipesService],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
