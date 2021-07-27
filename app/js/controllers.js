angular.module('multiply.controllers', []).

  /* multiply controller */
  controller('multiplyController', function($scope, ergastAPIservice) {
    
    //To get Values from api
    ergastAPIservice.getValues().success(function (response) {
        $scope.firstNumber=response.input1;
        $scope.secondNumber=response.input2;
        $scope.result=response.result;
        console.log(response)
    });

    //To save Values to api
    function saveValues(values){
      ergastAPIservice.saveValues(values).success(function (response) {
        console.log(response);
    });
    }
 
    //To multiply values
    function mul(x, y) {
      var values = {
        "input1": x,
        "input2": y,
        "result": x * y 
      }
      saveValues(values);
      return x * y;
    }
 
    function calc(x, y) {
      return mul(parseInt(x, 10), parseInt(y));
    }
    $scope.disableprop=($scope.secondNumber >=0 && $scope.firstNumber >= 0) ? true:false;
    $scope.calc = calc;
  });