define(['angularAMD', 'angularBootstrap'], function(angularAMD) {
    var app = angular.module('MyApp',  ['ui.bootstrap']);
    return angularAMD.bootstrap(app);
});