require.config({
    paths: {
        angular: '../lib/angular/angular.min',
        jquery: '../lib/jquery/dist/jquery.min',
        bootstrap: '../bootstrap/dist/js/bootstrap.min',
        underscore: '../lib/underscore/underscore-min',
        angularAMD: '../lib/angularAMD/angularAMD.min',
        angularBootstrap: '../lib/angular-bootstrap/ui-bootstrap.min',
    },

    shim: {
        'angularAMD': ['angular'],
        'bootstrap': {deps:['jquery']},
        'underscore': {exports: '_'},
        'angularBootstrap': {deps:['angular']}
    },
    deps: ['app']
});

require([
    'controllers/MainCtrl',
    'services/MainService'
]);