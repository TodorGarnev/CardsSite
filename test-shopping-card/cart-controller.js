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
    
    /* $scope.add = function(card) {
        $scope.add = function () {
        
            console.log($scope.card);
            
            $http.post('/add',$scope.card).
            success(function(card) {
                console.log("posted successfully");
            }).error(function(data) {
                console.error("error in posting");
            })
        }
	}; */
    
   
    
    $scope.add= function(){
    console.log('clicked add');
    $http({
        url: '/add',
        method: 'POST',
        data: $scope.card
    }).then(function (httpResponse) {
        console.log('response:', httpResponse);
    })
   }
    
    

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