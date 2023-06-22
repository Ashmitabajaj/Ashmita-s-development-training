angular.module('myAutoPilotCtrl').directive('autopilotdirective', function autopilotdirective() {
  var AutoPilotController = function AutoPilotController($scope, APContent) {
    var vm = $scope.autopilot

    vm.isRollupVisible = false;


    vm.functions.viewChange= function viewChange(){
      vm.isRollupVisible= !vm.isRollupVisible;
    }



    vm.functions.positionChange = function positionChange() {
      if(vm.selectedPosition){
        console.log(vm.selectedPosition)
        var findRec = APContent.recData.find(value => value.positionId === vm.selectedPosition.positionId)
        console.log(findRec)
        
        console.log(vm.selectedRecruiter = findRec.recruiterName)
        APContent.selectRecruiterName = findRec.recruiterName
      }
     
    }
    
  }
  return {
    restrict: 'E',
    templateUrl: 'app/components/autopilot/section-two/section-two.component.html',
    scope: { autopilot: '=controller' },
    controller: AutoPilotController
  }

})