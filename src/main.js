// defining jQuery globally
// bootstrap expects jQuery to be defined 
$ = jQuery = require('jquery');

var App = console.log("hello world from browserify");

module.exports = App;