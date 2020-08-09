import { Component, OnInit } from "@angular/core";
import { DataService } from "../service/data.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "../models/user";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  title = "Voting";
  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  loginForm: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      password: [null, Validators.required],
    });
  }
  submit() {
    if (!this.loginForm.valid) {
      return;
    }
    this.dataService
      .getUserService(this.loginForm.value)
      .subscribe((userData: User) => {
        console.log(userData);
        if (userData) {
          this.dataService.setUserData(userData);
          localStorage.setItem("token", userData.token.toString());
          this.router.navigateByUrl("/votingDashboard");
        }
      });
    console.log(this.loginForm.value);
  }
}
