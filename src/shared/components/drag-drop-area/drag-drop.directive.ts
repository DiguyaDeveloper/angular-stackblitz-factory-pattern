import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { FileExtensions } from '../../../core/file';
import { FileAbstract } from '../../../core/file.abstract';

@Directive({
  selector: '[fileDragDrop]',
})
export class DragDropDirective {
  private _dragInProgress: boolean;

  @Output() private filesChangeEmitter: EventEmitter<File> = new EventEmitter();

  @Input() fileDragDrop: Array<FileExtensions>;

  @Output() private filesInvalidEmitter: EventEmitter<File> =
    new EventEmitter();

  @HostBinding('class.dragging') get dragInProgress() {
    return this._dragInProgress;
  }

  @HostListener('dragenter', ['$event'])
  @HostListener('dragover', ['$event'])
  public onDragOver(event) {
    event.dataTransfer.dropEffect = 'move';
    this.stopAndPreventDefault(event);
    this._dragInProgress = true;
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(event) {
    this.stopAndPreventDefault(event);
    this._dragInProgress = false;
  }

  @HostListener('drop', ['$event'])
  @HostListener('input', ['$event'])
  public onDrop(event) {
    this.stopAndPreventDefault(event);

    const files = event.dataTransfer
      ? event.dataTransfer.files
      : event.target.files;

    const file: File = files[0];

    // if (super.validation(file.type)) {
    //   this.filesChangeEmitter.emit(file);
    // } else {
    //   this.filesInvalidEmitter.emit();
    // }

    this._dragInProgress = false;
  }

  stopAndPreventDefault(event: UIEvent): void {
    event.stopPropagation();
    event.preventDefault();
  }
}
