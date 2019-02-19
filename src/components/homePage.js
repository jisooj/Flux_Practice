"use strict";

var React = require('react');
var createReactClass = require('create-react-class');
var Home = createReactClass({
   render: function() {
      return (
         <div className='jumbotron'>
            <h1>Title</h1>
            <p>react, react router, and flux</p>
         </div>
      );
   }
});

module.exports = Home;