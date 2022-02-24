import { Component, OnInit, VERSION } from '@angular/core';
import { FileExtensions } from '../core/file';
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
  allowedExtensions: FileExtensions[] = [FileFactory.factory(FileEnum.CSV)];
  uploadedFile: File;

  ngOnInit() {
    console.log(this.file.getExtension(), this.file.getTypes());
  }

  readFile(file: File): void {
    this.uploadedFile = file;
  }
}
