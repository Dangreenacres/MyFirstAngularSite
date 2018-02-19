angular.module("itsItinerary").controller("itineraryController", function ($scope, $http) {

    var itinId;

    //Default View State (On Page Load)
    $scope.isList = true;
    $scope.isEditing = false;
    $scope.isUpdating = false;

    // Add Itinerary
    $scope.beginEditing = function () {
        //Reset form values
        $scope.addForm.$setPristine();

        //View State
        $scope.isList = false;
        $scope.isEditing = true;
        $scope.isUpdating = false;
    };

    //Cancel Addition
    $scope.cancelAdd = function () {
        //View State
        $scope.isList = true;
        $scope.isEditing = false;
        $scope.isUpdating = false;

        //Clear Form
        $scope.itineraryName = "";
    };

    //Cancel Edit
    $scope.cancelUpdate = function () {
        //View State
        $scope.isList = true;
        $scope.isEditing = false;
        $scope.isUpdating = false;
    };

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

                //View State
                $scope.isList = true;
                $scope.isEditing = false;
                $scope.isUpdating = false;

                //Clear Form
                $scope.itineraryName = "";
                $scope.itineraryDestination = "";
                $scope.itineraryPurpose = "";
                $scope.itineraryStartDate = "";
                $scope.itineraryEndDate = "";
            })
            .error(function (error) {
                $scope.errorMessage = error;
            });
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

    // Edit Itinerary
    $scope.displayEditItinerary = function (itineraryId) {

        //View State
        $scope.isList = false;
        $scope.isEditing = false;
        $scope.isUpdating = true;

        $http.get("http://webteach_net.hallam.shu.ac.uk/acesjas/api/its/" + itineraryId)
            .success(function (response) {
                $scope.editItineraryName = response.itiName;
                $scope.editItineraryDestination = response.destination;
                $scope.editItineraryPurpose = response.purpose;
                $scope.editItineraryStartDate = new Date(response.startDate);
                $scope.editItineraryEndDate = new Date(response.endDate);

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
            startDate: new Date($scope.editItineraryStartDate),
            endDate: new Date($scope.editItineraryEndDate)
        }

        $http.put("http://webteach_net.hallam.shu.ac.uk/acesjas/api/its", itineraryDetails)
            .success(function () {

                //View State
                $scope.isList = true;
                $scope.isEditing = false;
                $scope.isUpdating = false;

                $scope.init();
            })
            .error(function (error) {
                $scope.errorMessage = error;
            });

    }
    
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