//heavily "inspired" by https://github.com/mgcrea/angular-strap/blob/master/src/navbar/navbar.js

angular.module('zalari.bootstrap.navbar', [])
    .directive('zaNavbar', function($window, $location) {

        return {
            restrict: 'A',
            link: function postLink(scope, element, attr, controller) {

                // Watch for the $location
                scope.$watch(function() {
                    return $location.path();

                }, function(newValue, oldValue) {
                    var liElements = element[0].querySelectorAll('li[data-match-route]');
                    angular.forEach(liElements, function(li) {
                        var liElement = angular.element(li);
                        var pattern = liElement.attr('data-match-route').replace('/', '\\/');
                        var regexp = new RegExp(pattern, ['i']);
                        if(regexp.test(newValue)) {
                            liElement.addClass('active');
                        } else {
                            liElement.removeClass('active');
                        }
                    });
                });
            }
        };
    });