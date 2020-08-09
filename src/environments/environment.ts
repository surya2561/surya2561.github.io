// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
};

const port = "http://localhost:8080";

export const api = {
  registerUser: port + "/api/onlineVotingPool/Users/registerUser",
  loginUser: port + "/api/onlineVotingPool/Users/loginUser",
  loginAdmin: port + "/api/onlineVotingPool/Admin",
  getAllCandidates: port + "/api/onlineVotingPool/Users/getCandidates",
  saveVote: port + "/api/onlineVotingPool/Users/vote",
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
