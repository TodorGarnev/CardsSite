// The main cart controller

myCardSiteControllers.controller('CartCtrl', function($scope, $resource, $http) {

	$scope.items = {};

	$scope.print = function() {
		var Cards = $resource('/cards', {});
		Cards.get({}, function(cards) {
            $scope.items = (cards.toJSON()).data;  //data variable is sent from api.js
          
			console.log($scope.items); //the result is shown in browser's console log
           
		});
	};
    
    $scope.add = function(card) {
<<<<<<< HEAD
        $resource('/add', {'name': 'proba', 'price': '5', 'quantity': '5'}, {method: "POST"});
        console.log('>>> add clicked');
=======
        $scope.add = function () {
        
            console.log($scope.card);
            
            $resource('/add', {name:'proba',price:'5',quantity:'5'}, {method: "POST"});
                      
        } 
>>>>>>> 686644e6a5d65f525812b227504402498053d04c
	}; 
    
   
    
	$scope.update = function(product) {
		console.log('update');
	};

	$scope.delete = function(product) {
		console.log('del');
	};

	$scope.edit = function(id) {
		console.log('edit');
	};

});