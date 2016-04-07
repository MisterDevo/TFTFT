define(['angular-route',
        'angular-resource',
        'angular-animate',
        'angular-bootstrap',
        'controllers/appControllers',
        'services/appServices',
        'directives/appDirectives'
  ], function() {
        return angular.module('TFTFT', ['ngRoute',
                                        'ngResource',
                                        'ngAnimate',
                                        'ui.bootstrap',
                                        'controllers',
                                        'services',
                                        'directives'
        ])
        .config(['$routeProvider',
            function($routeProvider) {
                $routeProvider
                    .when('/', {
                      templateUrl: '../welcome.html',
                      controller: 'welcomeController'
                    })
                    .when('/mochawesome-unit', {
                      templateUrl: '../report/test-unit.html'
                    })
                    .when('/mochawesome-route', {
                      templateUrl: '../report/test-route.html'
                    })
                    .when('/mochawesome-spec', {
                      templateUrl: '../report/test-spec.html'
                    })
                    .when('/coverage', {
                      templateUrl: '../coverage.html'
                    })
                    .when('/saucelabs', {
                      templateUrl: '../saucelabs.html'
                    })
                    .when('/login', {
                      templateUrl: '../login.html',
                      controller: 'loginController'
                    })
                    .otherwise({
                        redirectTo: '/'
                    });
            }
        ]);
    }
);
