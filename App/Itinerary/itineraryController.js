angular.module("itsItinerary").controller("itineraryController", function ($scope) {
    //$scope.itineraries = ['October Business Development trip 2015', 'November Client-site visit 2015', 'January Scoping visit 2016', 'May Recruitment visit 2016', 'July Conversion visit 2016']
    
    $scope.add = function () {
        $scope.itineraries.push($scope.itineraryName);
        $scope.isEditing = false;
        $scope.itineraryName = "";
    };

    $scope.isEditing = false;

    $scope.beginEditing = function () {
        $scope.isEditing = true;
    };

    $scope.cancelAddition = function () {
        $scope.isEditing = false;
        $scope.itineraryName = "";
    };

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


});