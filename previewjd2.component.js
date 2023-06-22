angular.module('myAutoPilotCtrl')

.controller("PreviewJdTwoController", function PreviewJdTwoController($scope, $uibModalInstance, APContent){
    var vm = $scope;
    console.log(vm);
    vm.selectIdentifier = APContent.selectIdentifier,
    vm.selectPositionId = APContent.selectPositionId,
    vm.selectRecruiterName = APContent.selectRecruiterName
} 
)
