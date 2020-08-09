import { Component, OnInit } from "@angular/core";
import { DataService } from "./service/data.service";
import { User } from "./models/user";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "Voting";
  constructor(private dataService: DataService) {}

  ngOnInit() {}
}
