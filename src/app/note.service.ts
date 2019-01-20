import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  date = Date.now();
  notes: any[] = [];

  constructor() { }

  getNotes() {
    return this.notes;
  }

  addNote(note) {
    this.notes.push(note);
    this.getNotes();
  }

  deleteNote(note) {
    var index = this.notes.indexOf(note);
    this.notes.splice(index, 1);
    this.getNotes();
  }

  getSingleNote(note) {
    var index = this.notes.indexOf(note);
    return (this.notes[index]);
  }
}
