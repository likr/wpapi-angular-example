var angular = require('angular')
var AppComponent = require('./app.component')
var PostComponent = require('./post.component')

module.exports = angular
  .module('app.components', [
    AppComponent,
    PostComponent
  ])
  .name
