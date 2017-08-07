var app = angular.module('myapp', ['use', 'ngMessages']);
app.controller('validationCtrl',["$scope","$http",function($scope){
$scope.formData = {};
$scope.usersArray = [];
 $scope.sortType     = 'name'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchData   = '';     // set the default search/filter term

$scope.validation = function()
{
if($scope.formData.password !== $scope.formData.confirmPassword){
		alert("password doesn't match");
		return false;
	}
	//alert(JSON.stringify($scope.formData));
	$scope.isSave = true;
	$scope.username1 = $scope.formData.username;
	$scope.role1 = $scope.formData.role;
	$scope.status1 = $scope.formData.status;
	$scope.date11 = $scope.formData.date1;
	$scope.email2 = $scope.formData.email;
	

	$scope.usersArray.push(
	{name : $scope.username1,
	 role : $scope.role1,
	 status : $scope.status1,
	 date : $scope.date11,
	 email : $scope.email2
	 
	});

	$scope.formData = {};
	

};
  
}]); 