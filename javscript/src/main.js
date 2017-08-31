/**
 * Created by neha_s on 8/30/2017.
 */

var angular = require('angular');
var angularRouter = require('angular-ui-router');

var venueReportApp = angular.module("venueReportApp", ['ui.router']);

venueReportApp.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('welcome', {
        url : '/welcome',
        templateUrl : '../HtmlTemplates/welcome.html',
        controller : 'venuereportCtrl',
        activetab : 'welcome'
    })
        .state('lorem', {
            url :'/lorem',
            templateUrl : '../HtmlTemplates/lorem.html',
            controller : 'venuereportCtrl',
            activetab : 'lorem'
        })
        .state('Ipsum', {
            url :'/Ipsum',
            templateUrl : '../HtmlTemplates/ipsum.html',
            controller : 'venuereportCtrl',
            activetab : 'Ipsum'
        })
        .state('dolar', {
            url :'/dolar',
            templateUrl : '../HtmlTemplates/dolar.html',
            controller : 'venuereportCtrl',
            activetab : 'dolar'
        })

    $urlRouterProvider.otherwise('../HtmlTemplates/index.html')
});

venueReportApp.controller('venuereportCtrl', function ($scope, $state, $location) {
    alert("Please Read my hardeep_Readme.txt file in this folder about what i used");
    $scope.isActive = function (destination) {
        return destination === $location.path;
        console.log($location.path);
    };
    console.log("sttae", $state);
})
