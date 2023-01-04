import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { EditableFormComponent } from '../components/editable-form/editable-form.component';
import { PlaceholderComponent } from '../components/placeholder/placeholder.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    EditableFormComponent,
    PlaceholderComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
