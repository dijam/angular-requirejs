require(['app'], function(app) {
    app.controller('MainCtrl', ['$scope', 'MainService', function($scope, MainService) {
            this.message= "hello " + MainService.get();
        }]);
});