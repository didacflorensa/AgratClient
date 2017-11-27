'use strict';

angular.module('myApp.socis', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/socis', {
            templateUrl: 'views/socis.html',
            controller: 'SocisCtrl'
        });
    }])

    .controller('SocisCtrl', [function() {

    }]);