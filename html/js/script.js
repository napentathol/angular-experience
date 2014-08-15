/**
 * Created by Alex on 8/14/2014.
 */

var xpApp = {
    $ng : angular.module('xpApp', [ 'ngRoute', 'ngAnimate' ]),
    intro : function introChange($location){
        $location.path('/intro');
    },
    java : function javaChange($location){
        $location.path('/java');
    },
    angular : function angularChange($location){
        $location.path('/angular');
    }
};

xpApp.$ng.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/java', {
            controller : 'JavaController',
            templateUrl : 'partials/java.html'
        }).when('/angular', {
            controller : 'AngularController',
            templateUrl : 'partials/angular.html'
        }).when('/intro', {
            controller : 'IntroController',
            templateUrl : 'partials/intro.html'
        }).otherwise({
            redirectTo : '/intro'
        });
    }
]);