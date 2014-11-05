require.config({
    paths: {
        angular: '../lib/angular/angular',
        jquery: '../lib/jquery/dist/jquery.min',
        bootstrap: '../bootstrap/dist/js/bootstrap.min',
        underscore: '../lib/underscore/underscore',
    },

    shim: {
        'angular': {exports: 'angular'},
        'bootstrap': {deps:['jquery']},
        'underscore': {exports: '_'}
    }
});

require([
    'controllers/MainCtrl',
    'services/MainService'
]);