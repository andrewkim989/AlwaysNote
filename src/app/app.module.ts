import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NoteService } from "./note.service";
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NoteNewComponent } from './notes/note-new/note-new.component';
import { NoteListComponent } from './notes/note-list/note-list.component';
import { NoteEditComponent } from './notes/note-list/note-edit/note-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteNewComponent,
    NoteListComponent,
    NoteEditComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
