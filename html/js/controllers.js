/**
 * Created by Alex on 8/14/2014.
 */
(function() {
    function right($scope){
        $scope.class = 'right';
        $scope.$parent.class = 'right';
    }

    function left($scope){
        $scope.class = 'left';
        $scope.$parent.class = 'left';
    }

    function transition($scope) {
        $scope.class = $scope.$parent.class;
    }

    xpApp.addParentController = function parentController($scope, $location) {
        $scope.next = function introNext(){
            xpApp.java($location);
        };
        $scope.prev = function angularPrev(){
            xpApp.angular($location);
        };
    };

    xpApp.addIntroController = function introController($scope, $location) {
        transition($scope);
        $scope.$parent.next = function(){
            right($scope);
            xpApp.java($location);
        };
        $scope.$parent.prev = function(){
            left($scope);
            xpApp.angular($location);
        };
    };

    xpApp.addJavaController = function javaController($scope, $location) {
        transition($scope);
        $scope.$parent.next = function(){
            right($scope);
            xpApp.angular($location);
        };
        $scope.$parent.prev = function(){
            left($scope);
            xpApp.intro($location);
        };
    };

    xpApp.addAngularController = function angularController($scope, $location) {
        transition($scope);
        $scope.$parent.next = function(){
            right($scope);
            xpApp.intro($location);
        };
        $scope.$parent.prev = function(){
            left($scope);
            xpApp.java($location);
        };
    };

    xpApp.$ng.controller('ParentController', ['$scope', '$location', xpApp.addParentController]);
    xpApp.$ng.controller('IntroController', ['$scope', '$location', xpApp.addIntroController]);
    xpApp.$ng.controller('JavaController', ['$scope', '$location', xpApp.addJavaController]);
    xpApp.$ng.controller('AngularController', ['$scope', '$location', xpApp.addAngularController]);
}());