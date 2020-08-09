import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { VotingDashboardComponent } from "./voting-dashboard/voting-dashboard.component";
import { CandidateDetailsComponent } from "./candidate-details/candidate-details.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" },
  {
    path: "votingDashboard",
    component: VotingDashboardComponent,
    pathMatch: "full",
  },
  {
    path: "details",
    component: CandidateDetailsComponent,
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
