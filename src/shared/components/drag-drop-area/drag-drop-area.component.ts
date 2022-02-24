import { DatePipe } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FileExtensions } from '../../../core/file';

type DragAreaType = 'initial' | 'loading' | 'valid' | 'invalid';

@Component({
  selector: 'app-drag-drop-area',
  templateUrl: './drag-drop-area.component.html',
  styleUrls: ['./drag-drop-area.component.scss'],
})
export class DragDropAreaComponent implements OnInit {
  @Input() public allowedExtensions: Array<FileExtensions> = [];
  @Output() public eventFileUploaded = new EventEmitter<File>();

  @ViewChild('dropZone', { static: true })
  dropZoneRef: ElementRef;

  public dragAreaType: BehaviorSubject<DragAreaType> =
    new BehaviorSubject<DragAreaType>('initial');

  public message: string;
  public title: string;
  public icon = './assets/icons/cloud-upload.svg';
  public alt = 'Upload icon';
  private fileToUpload: File;

  constructor(private readonly datePipe: DatePipe) {}

  ngOnInit() {
    this.dragAreaType.subscribe(() => {
      this.configureComponent();
    });
  }

  configureComponent() {
    switch (this.dragAreaType.value) {
      case 'valid':
        this.title = this.fileToUpload.name;
        this.message = `Adicionado em ${this.datePipe.transform(
          new Date(),
          'dd/MM/yyyy'
        )}`;
        this.icon = './assets/icons/file-upload.svg';
        this.alt = 'File upload icon';
        break;

      case 'invalid':
        this.title = 'Formato ou tamanho inválido';
        this.message = 'Selecionar outro arquivo';
        this.icon = './assets/icons/x.svg';
        this.alt = 'Error icon';
        break;

      default:
        this.title = 'Arraste ou selecione seu arquivo';
        this.message = this.humanizedTypes(this.allowedExtensions);
        this.icon = './assets/icons/cloud-upload.svg';
        this.alt = 'Upload icon';
        break;
    }
  }

  humanizedTypes(allowedExtensions: FileExtensions[]): string {
    let types = '';

    const penultimate = allowedExtensions.length - 2;
    const last = allowedExtensions.length - 1;

    for (let index = 0; index < allowedExtensions.length; index++) {
      types += `${allowedExtensions[index].getExtension()} ${
        index === penultimate ? ' ou ' : index === last ? '' : ', '
      } `;
    }

    return allowedExtensions.length ? `${types} até 5MB` : null;
  }

  resetDropArea() {
    this.dragAreaType.next('initial');
  }

  dropFile(file: File) {
    this.fileToUpload = file;
    this.dragAreaType.next('valid');
    this.eventFileUploaded.emit(file);
  }

  dropInvalidFile() {
    this.dragAreaType.next('invalid');
  }
}
