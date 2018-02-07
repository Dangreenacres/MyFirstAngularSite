angular.module("itsItinerary").controller("itineraryController", function ($scope) {
    
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
    $scope.init = function () {
        $scope.itineraries = [{
            id: 1,
            itiName: "October Business Development trip 2015",
            destination: "Germany",
            purpose: "Work",
            startDate: new Date("2015-10-03"),
            endDate: new Date("2015-10-10")
        },
        {
            id: 2,
            itiName: "November Client-site visit 2015",
            destination: "America",
            purpose: "Work",
            startDate: new Date("2015-11-05"),
            endDate: new Date("2015-11-08")
        },
        {
            id: 3,
            itiName: "January Scoping visit 2016",
            destination: "China",
            purpose: "Work",
            startDate: new Date("2016-01-15"),
            endDate: new Date("2016-01-23")
        },
        {
            id: 4,
            itiName: "May Recruitment visit 2016",
            destination: "India",
            purpose: "Work",
            startDate: new Date("2016-05-21"),
            endDate: new Date("2016-05-30")
        },
        {
            id: 5,
            itiName: "July Conversion visit 2016",
            destination: "Germany",
            purpose: "Work",
            startDate: new Date("2016-07-08"),
            endDate: new Date("2015-07-15")
        }];
    };

    $scope.init();
});