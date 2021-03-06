'use strict';

var namespace = 'main';

var angular = require('angular');
require('angular-material');
var app = angular.module(namespace, ['ngMaterial',
    // inject:modules start
    require('./map')(namespace).name
    // inject:modules end
]);

var runDeps = [];
var run = function() {
};

run.$inject = runDeps;
app.run(run);

module.exports = app;