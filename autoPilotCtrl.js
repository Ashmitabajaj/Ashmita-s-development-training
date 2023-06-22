angular.module('myAutoPilotCtrl', [])
  .controller('APCtrl', ['$scope', 'APContent','$uibModal', function ($scope, APContent, $uibModal) {
    var vm = this;
    var initialize = function initialize() {
      vm.newMessage = APContent.newMessage;
      vm.apData = APContent.apData;
      vm.selectedPosition = null;
      vm.selectedRecruiter = APContent.selectRecruiterName;
      vm.recData = APContent.recData;
      
     
      vm.functions = {
        previewJd2: previewJd2,
       

      }
      
      
     

    }
    var previewJd2 = function previewJd2(){
      console.log(APContent.selectPositionId)
      vm.findDetails = APContent.recData.find((value)=> value.positionId === vm.selectedPosition.positionId)
      console.log(vm.findDetails);
      
      APContent.selectIdentifier = vm.findDetails.identifier;
      APContent.selectPositionId = vm.findDetails.positionId;
      APContent.selectedRecruiter = vm.findDetails.recruiterName;
      console.log(APContent.selectPositionId)


      $uibModal.open({
        templateUrl: "app/components/autopilot/previewjd2/previewjd2.component.html",
        controller: "PreviewJdTwoController",
      })
    


    }
    initialize();
  }

  ])