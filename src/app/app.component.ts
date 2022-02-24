import { Component, OnInit, VERSION } from '@angular/core';
import { FileEnum } from '../core/file.enum';
import { FileFactory } from '../core/file.factory';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  file = FileFactory.factory(FileEnum.CSV);

  ngOnInit() {
    console.log(this.file.getExtension(), this.file.getTypes());
  }
}
