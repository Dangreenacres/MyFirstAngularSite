angular.module("itsItinerary").controller("itineraryController", function ($scope, $http) {
    
    $scope.add = function () {
        var itineraryDetails = {
            itiName: $scope.itineraryName,
            destination: $scope.itineraryDestination,
            purpose: $scope.itineraryPurpose,
            startDate: new Date($scope.itineraryStartDate),
            endDate: new Date($scope.itineraryEndDate)
        }
        
        $http.post("http://webteach_net.hallam.shu.ac.uk/acesjas/api/its", itineraryDetails)
            .success(function () {
                $scope.init();
            })
            .error(function (error) {
                $scope.errorMessage = error;
            });
        $scope.isEditing = false;

        $scope.itineraryName = "";
        $scope.itineraryDestination = "";
        $scope.itineraryPurpose = "";
        $scope.itineraryStartDate = "";
        $scope.itineraryEndDate = "";
    }
    
    $scope.remove = function (itineraryId) {
        $http.delete("http://webteach_net.hallam.shu.ac.uk/acesjas/api/its/" + itineraryId)
            .success(function () {
                $scope.init();
            })
            .error(function (error) {
                $scope.errorMessage = error;
            });
    };

    $scope.isEditing = false;

    $scope.beginEditing = function () {
        $scope.isEditing = true;
    };

    $scope.cancelAddition = function () {
        $scope.isEditing = false;
        $scope.itineraryName = "";
    };
    
    $scope.init = function () {
        $http.get("http://webteach_net.hallam.shu.ac.uk/acesjas/api/its")
            .success(function (response) {
                $scope.itineraries = response;
            })
            .error(function (error) {
                $scope.errorMessage = error;
            });
    };

    $scope.init();
});