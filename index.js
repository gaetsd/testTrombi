/* global angular */

// -----------------------
// Pas besoin de modifier ce fichier
// -----------------------

angular.module('app', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        // Voir la documentation de ui-router.
    
        $urlRouterProvider.otherwise("/");
    
        // Now set up the states
        $stateProvider
            .state('index', {
                url: "/",
                templateUrl: "index.html",
                controller: 'indexCtrl'
            })
            .state('view', {
                url: "/view/:id",
                templateUrl: "view.html",
                controller: 'viewCtrl'
            });
    });