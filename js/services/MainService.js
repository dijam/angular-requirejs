define(['app'], function(app) {

    return app.factory('MainService', function() {
        var data = {message: 'majid'};
        return {
            get: function() {
                return data.message;
            }
        };
    });

});