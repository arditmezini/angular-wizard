// Declare app level module which depends on filters, and services
var app = angular.module('myApp', []);


app.controller('WizardCtrl', ['$scope', function($scope) {
  //Object
  $scope.wizard = {
    account:{},
    education:{},
    personal:{}
  };

  //Wizard Steps
  $scope.steps = [
    '1 - Create Your Account',
    '2 - Educationals Profiles',
    '3 - Personal Details'
  ];

  //Starting step
  $scope.selection = $scope.steps[0];

  //Current Step
  $scope.getCurrentStepIndex = function(){
    // Get the index of the current step given selection
    return _.indexOf($scope.steps, $scope.selection);
  };

  $scope.getCurrentStepIndexProgressbar = function(){
    // Get the index of the current step given selection
    return _.indexOf($scope.steps, $scope.selection) + 1;
  };

  // Go to a defined step index
  $scope.goToStep = function(index) {
    if ( !_.isUndefined($scope.steps[index]) )
    {
      $scope.selection = $scope.steps[index];
    }
  };

  //#region Caluclate existance of Prev and Next Step
  $scope.hasNextStep = function(){
    var stepIndex = $scope.getCurrentStepIndex();
    var nextStep = stepIndex + 1;
    // Return true if there is a next step, false if not
    return !_.isUndefined($scope.steps[nextStep]);
  };

  $scope.hasPrevStep = function(){
    var stepIndex = $scope.getCurrentStepIndex();
    var previousStep = stepIndex - 1;
    // Return true if there is a next step, false if not
    return !_.isUndefined($scope.steps[previousStep]);
  };
  //#endregion

  //Move step forward
  $scope.incrementStep = function() {
    if ( $scope.hasNextStep() )
    {
      var stepIndex = $scope.getCurrentStepIndex();
      var nextStep = stepIndex + 1;
      $scope.selection = $scope.steps[nextStep];
    }
  };

  //Move step back
  $scope.decrementStep = function() {
    if ( $scope.hasPrevStep() )
    {
      var stepIndex = $scope.getCurrentStepIndex();
      var previousStep = stepIndex - 1;
      $scope.selection = $scope.steps[previousStep];
    }
  };

  $scope.isValid = function(){
    if ( !_.isUndefined($scope.myForm) ){
    return $scope.myForm.$valid;
    }
  }

  $scope.saveWizard = function (){
    alert("Data saved...")
    console.log($scope.wizard);
  }
  //Workaround for setting the form to $scope
  $scope.setForm = function (form) {
    $scope.myForm = form;
}
}]);