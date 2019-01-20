import { Component, OnInit } from '@angular/core';
import { NoteService } from "../../note.service";

@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent implements OnInit {

  constructor(private noteService: NoteService) { }

  newNote: any;
  id: number = 1;

  ngOnInit() {
    this.newNote = {id: this.id, note: "", created_at: Date.now(), updated_at: Date.now()};
  }

  createNote() {
    this.noteService.addNote(this.newNote);
    this.id = this.id + 1;
    this.newNote = {id: this.id, note: "", created_at: Date.now(), updated_at: Date.now()};
  }
}
