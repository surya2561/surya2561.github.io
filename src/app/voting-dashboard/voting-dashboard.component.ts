import { Component, OnInit } from "@angular/core";
import { DataService } from "../service/data.service";
import { Candidate } from "../models/candidate";

import { Router } from "@angular/router";

@Component({
  selector: "app-voting-dashboard",
  templateUrl: "./voting-dashboard.component.html",
  styleUrls: ["./voting-dashboard.component.scss"],
})
export class VotingDashboardComponent implements OnInit {
  private candidateData: Candidate[] = [];
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.dataService.getAllCandidates().subscribe((responseData: Candidate) => {
      this.candidateData = responseData["candidates"];
    });
  }
  navigateToDetails(candidateData) {
    console.log(candidateData);
    this.dataService.setCandidateDetails(candidateData);
    this.router.navigateByUrl("/details");
  }
}
