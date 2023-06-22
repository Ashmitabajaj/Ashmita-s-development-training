angular.module('myAutoPilotCtrl').directive('sectionthreedirective', function sectionthreedirective(){
    
    var SectionThreeAPController =  function SectionThreeAPController($scope, APContent){
        var vm= $scope.sectionthree
        console.log(vm);

    }
    
    return{
        restrict: 'E',
        templateUrl: "app/components/autopilot/section-three/sectionthree.controller.html",
        scope: {sectionthree: '=controller'},
        controller: SectionThreeAPController,


    }
})

