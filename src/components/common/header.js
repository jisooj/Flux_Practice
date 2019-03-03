'use strict';

var React = require('react');
var createReactClass = require('create-react-class');
var Header = createReactClass({
   render: function() {
      return (
         <nav className='navbar navbar-expand-lg navbar-light bg-light'>
			<a className="navbar-brand" href='/'>
	    		<img src='images/logo_resized.png' />
	    	</a>
			
        	<ul className='navbar-nav mr-auto'>
        		<li className='nav-item active'>
        			<a className='nav-link' href='/'>Home</a>
      			</li>
          		<li className='nav-item'>
          			<a className='nav-link' href='/#authors'>Authors</a>
      			</li>
      			<li className='nav-item'>
          			<a className='nav-link' href='/#about'>About</a>
      			</li>
        	</ul>
         </nav>
      );
   }
});

module.exports = Header;