angular.module("myAutoPilotCtrl", []).controller("APCtrl", [
  "$scope",
  "APContent",

  function ($scope, APContent) {
    var vm = $scope;
    vm.newMessage = APContent.newMessage;
  },
]);
