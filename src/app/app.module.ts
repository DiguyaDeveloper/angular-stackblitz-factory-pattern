import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DragDropAreaComponent } from '../shared/components/drag-drop-area/drag-drop-area.component';
import { DragDropDirective } from '../shared/components/drag-drop-area/drag-drop.directive';
import { DatePipe } from '@angular/common';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    DragDropAreaComponent,
    DragDropDirective,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
