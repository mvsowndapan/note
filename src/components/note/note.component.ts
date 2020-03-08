import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
@Component({
  selector: "app-note",
  templateUrl: "./note.component.html",
  styleUrls: ["./note.component.css"]
})
export class NoteComponent implements OnInit {
  public id;
  public currentUrl;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = parseInt(params.get("id"));
    });
    this.currentUrl = this.router.url.split("/")[1];
  }
  viewNoteData() {
    this.router.navigate(["note-data"], { relativeTo: this.activatedRoute });
  }
  goPrevious() {
    let previousId = this.id - 1;
    if (previousId === 0) return this.router.navigate([this.currentUrl]);
    this.router.navigate([this.currentUrl, previousId]);
  }
  goNext() {
    let nextId = this.id + 1;
    this.router.navigate([this.currentUrl, nextId]);
  }
  goBack() {
    let selectedId = this.id ? this.id : null;
    this.router.navigate([this.currentUrl, { id: selectedId }]);
  }
}
