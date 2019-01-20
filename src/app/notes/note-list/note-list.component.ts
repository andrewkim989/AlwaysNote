import { Component, OnInit } from '@angular/core';
import { NoteService } from "../../note.service";
import { Note } from "../../note";

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css'],
  providers: [Note]
})
export class NoteListComponent implements OnInit {

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.getAll();
  }

  notes: any;
  note: any;
  showEdit: boolean = false;

  getAll() {
    this.notes = this.noteService.getNotes();
  }

  delete(note) {
    this.noteService.deleteNote(note);
  }

  edit(note) {
    let n = this.noteService.getSingleNote(note);
    this.note = n;
    this.showEdit = true;
  }

  closeEdit() {
    this.showEdit = false;
  }
}
