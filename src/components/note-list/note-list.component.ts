import { Component, OnInit } from "@angular/core";
import { NoteListService } from "src/services/note-list.service";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
@Component({
  selector: "app-note-list",
  templateUrl: "./note-list.component.html",
  styleUrls: ["./note-list.component.css"]
})
export class NoteListComponent implements OnInit {
  public shouldRun = true;
  public notes;
  public selectedId;
  public noteListClass;
  constructor(
    private router: Router,
    private noteListservice: NoteListService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = parseInt(params.get("id"));
    });
    this.noteListservice.getNotes().subscribe(notes => (this.notes = notes));
  }
  onSelectNote(note) {
    this.router.navigate(["/note-list", note.id]);
  }
  selected(id) {
    return {
      noteActive: this.selectedId === id,
      noteUnActive: !(this.selectedId === id),
      note: true
    };
  }
}
