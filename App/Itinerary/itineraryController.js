angular.module("itsItinerary").controller("itineraryController", function ($scope, $http) {
    
    $scope.add = function () {
        var itineraryDetails = {
            id: $scope.itineraries.length + 1,
            itiName: $scope.itineraryName,
            destination: $scope.itineraryDestination,
            purpose: $scope.itineraryPurpose,
            startDate: new Date($scope.itineraryStartDate),
            endDate: new Date($scope.itineraryEndDate)
        }
        $scope.itineraries.push(itineraryDetails);
        $scope.isEditing = false;

        $scope.itineraryName = "";
        $scope.itineraryDestination = "";
        $scope.itineraryPurpose = "";
        $scope.itineraryStartDate = "";
        $scope.itineraryEndDate = "";
    }

    $scope.remove = function (itineraryId) {
        var itineraryToRemove = $scope.itineraries.indexOf(itineraryId);
        $scope.itineraries.splice(itineraryToRemove, 1);
    };

    $scope.isEditing = false;

    $scope.beginEditing = function () {
        $scope.isEditing = true;
    };

    $scope.cancelAddition = function () {
        $scope.isEditing = false;
        $scope.itineraryName = "";
    };

    //Having trouble getting error message to show.
    $scope.init = function () {
        $http.get("http://webteach_net.hallam.sghu.ac.uk/acesjas/api/its")
            .success(function (response) {
                $scope.itineraries = response;
            })
            .error(function (error) {
                $scope.errorMessage = error
            });
    };

    $scope.init();
});