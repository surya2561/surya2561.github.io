import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { api } from "src/environments/environment";
import { Observable, BehaviorSubject, Subject, of } from "rxjs";
import { User } from "../models/user";
import { Candidate } from "../models/candidate";

import { tokenName } from "@angular/compiler";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private userData: User;
  private vote = new Subject<String>();
  checkVote = this.vote.asObservable();
  private candidateData: Candidate;

  constructor(private http: HttpClient) {}

  setVote(Vote: string) {
    this.vote.next(Vote);
  }
  setUserData(userData: User) {
    this.userData = userData;
  }
  getUserData() {
    return this.userData;
  }
  setCandidateDetails(candidateData: Candidate) {
    this.candidateData = candidateData;
  }
  getCandidateDetails() {
    return this.candidateData;
  }
  registerUserService(registerData) {
    return this.http.post(api.registerUser, registerData);
  }
  getUserService(loginData): Observable<User> {
    return this.http.post<User>(api.loginUser, loginData);
  }

  getAllCandidates(): Observable<Candidate> {
    const headers = new HttpHeaders({
      Authorization: localStorage.getItem("token"),
    });
    return this.http.get<Candidate>(api.getAllCandidates, {
      headers: headers,
    });
  }
  saveVote(user_id, candidate_id): Observable<string> {
    console.log(user_id, candidate_id);
    const headers = new HttpHeaders({
      Authorization: localStorage.getItem("token"),
    });
    return this.http.post<string>(
      api.saveVote,
      { user_id: user_id, candidate_id: candidate_id },
      { headers: headers }
    );
  }
}
