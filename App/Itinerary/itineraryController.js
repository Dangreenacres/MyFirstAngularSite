angular.module("itsItinerary").controller("itineraryController", function ($scope, $http) {
    
    $scope.add = function () {
        var itineraryDetails = {
            itiName: $scope.itineraryName,
            destination: $scope.itineraryDestination,
            purpose: $scope.itineraryPurpose,
            startDate: new Date($scope.itineraryStartDate),
            endDate: new Date($scope.itineraryEndDate)
        }

        //Doubtful that this works
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

    //Check this too
    $scope.remove = function (itineraryId) {
        $http.delete("http://webteach_net.hallam.shu.ac.uk/acesjas/api/its" + itineraryId.Id)
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

    //Having trouble getting error message to show.
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