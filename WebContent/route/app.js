var testApp = angular.module('testApp',['ui.router']);

testApp.config(function($stateProvider) {
	  $stateProvider
		.state('home',{
			url:'/',
			 views: {  
                     home: {
                           templateUrl:'./partials/view.html',
							controller:"EmployeeUserController"
                    }
                },
		})
})

