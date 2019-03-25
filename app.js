var app= angular.module("App",[]);


app.controller("Controller", function($scope, $http){

    $scope.users=["1","2","3"];

    var url = "http://localhost:53374/api/Ders";

    $http.get(url).success(function(response){
        $scope.users=response;
    });

})