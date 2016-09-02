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
	    var AddCard = $resource('/add',
		      {name: '@name', price: '@price', quantity: '@quantity'}, {
			      charge: {
				      method:'POST',
				      params:{ charge: true}}
		      });

	    AddCard.charge({'name': 'Valentine Card', 'price': '50.0', 'quantity': '15'}); 
        console.log('Added');
    }; 
    
   
    
    
	$scope.update = function() {
		var UpdateCard = $resource('/update/:id', {id:'@id', quantity:'@quantity'}, {
			      charge: {
				      update: { method:'PUT'},
				      params:{ charge: true}}
		      });

	    UpdateCard.charge({id:'15',quantity:'5'}); 
        console.log('Updated');
        console.log('id:',UpdateCard.id);
        console.log('quantity:',UpdateCard.quantity);
	};
    
    
    
    
	$scope.delete = function() {
		var DelCard = $resource('/del/:id', {id:'@id'}, {
			      charge: {
				      method:'DELETE',
				      params:{ charge: true}}
		});
        
        DelCard.charge({id:'21'});
        console.log('Deleted');
	};
    
    

});