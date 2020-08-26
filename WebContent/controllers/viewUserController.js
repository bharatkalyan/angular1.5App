angular.module('testApp').controller("EmployeeUserController", ['$scope', 'userService', 'EmpService', function ($scope, userService, EmpService) {  
  
    $scope.userData = [];
     
    //Get Data  
    userService.get(EmpService.EmployeesDetailsUrl)  
    .then(function (response) {  
        $scope.userData = response.data.Employees;  
    });  
   
}]);  