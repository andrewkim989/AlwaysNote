import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {
  @Input() note;
  @Output() closeComponent = new EventEmitter();

  editNote: any;
  copy: any;
  date: number = Date.now();

  constructor() { }

  ngOnInit() {
    this.editNote = this.note;
    this.copy = Object.assign({}, this.note);
  }

  edit() {
    this.note.updated_at = this.date;
    this.closeComponent.emit();
  }

  cancel() {
    Object.assign(this.note, this.copy);
    this.closeComponent.emit();
  }
}
