angular.module("itsItinerary").controller("itineraryController", function ($scope, $http) {

    var itinId;

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

    // Set default on page load
    $scope.isEditing = false;
    $scope.isUpdating = false;

    // Add Itinerary
    $scope.beginEditing = function () {
        $scope.isEditing = true;
    };

    // Edit Itinerary
    $scope.displayEditItinerary = function (itineraryId) {
        $scope.isUpdating = true;
        $http.get("http://webteach_net.hallam.shu.ac.uk/acesjas/api/its/" + itineraryId)
            .success(function (response) {
                $scope.editItineraryName = response.itiName;
                $scope.editItineraryDestination = response.destination;
                $scope.editItineraryPurpose = response.purpose;
                $scope.editItineraryStartDate = response.startDate;
                $scope.editItineraryEndDate = response.endDate;

                itinId = response.Id;
            })
            .error(function (error) {
                $scope.errorMessage = error;
            });
    };

    $scope.edit = function () {
        var itineraryDetails = {
            Id: itinId,
            itiName: $scope.editItineraryName,
            destination: $scope.editItineraryDestination,
            purpose: $scope.editItineraryPurpose,
            startDate: new Date($scope.itineraryStartDate, "dd/MM/yyyy"),
            endDate: new Date($scope.itineraryEndDate, "dd/MM/yyyy")
        }

        $http.put("http://webteach_net.hallam.shu.ac.uk/acesjas/api/its", itineraryDetails)
            .success(function () {
                $scope.isUpdating = false;
                $scope.init();
            })
            .error(function (error) {
                $scope.errorMessage = error;
            });

    }

    $scope.cancelAddition = function () {
        $scope.isEditing = false;
        $scope.itineraryName = "";
    };

    $scope.cancelEditing = function () {
        $scope.isUpdating = false;
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