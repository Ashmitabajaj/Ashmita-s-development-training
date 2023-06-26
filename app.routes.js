var app = angular.module("myAppRouter", ["ui.router"]);

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/autopilot");

  $stateProvider.state("autopilot", {
    url: "/autopilot",
    templateUrl: "app/components/autopilot/autopilot.html",
  });
});
