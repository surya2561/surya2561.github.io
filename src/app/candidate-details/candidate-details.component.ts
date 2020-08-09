import { Component, OnInit } from "@angular/core";
import { DataService } from "../service/data.service";
import { Candidate } from "../models/candidate";

@Component({
  selector: "app-candidate-details",
  templateUrl: "./candidate-details.component.html",
  styleUrls: ["./candidate-details.component.scss"],
})
export class CandidateDetailsComponent implements OnInit {
  private candidateDetails: Candidate;
  private checkVote: String = null;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.checkVote.subscribe((check) => {
      if (check) {
        this.checkVote = check;
      }
    });
    console.log(this.checkVote);
    this.candidateDetails = this.dataService.getCandidateDetails();
    console.log(this.candidateDetails);
  }
  vote() {
    let user = this.dataService.getUserData();
    this.dataService
      .saveVote(this.candidateDetails["id"], user.id)
      .subscribe((response) => {
        if (response) {
          this.dataService.setVote(response);
        }
      });
  }
}
