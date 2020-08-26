angular.module('testApp').factory('EmpService', function () {  
    return {  
        EmployeesDetailsUrl: './assets/employeeDetails.json'  
    }  
});  
  
//get data  
testApp.factory('userService',  
    ["$http",  
        function ($http) {  
            return {  
                get: function (url) {  
                    var promise = $http.get(url)  
                    .success(function (data) {  
                        return data;  
                    })  
                    .error(function (data) {  
                        return { "status": false };  
                    });  
                    return promise;  
                }  
            }  
  
        }]);  