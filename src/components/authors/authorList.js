'use strict';

var React = require('react');
var createReactClass = require('create-react-class');

var AuthorList = createReactClass({
	// NOTE: propType moved to prop-types library
	// https://www.npmjs.com/package/prop-types
	// propTypes: {
	// 	authros: React.PropTypes.array.isRequired
	// },
	render: function() {
		var createAuthorRow = function(author) {
			return (
				<tr key={author.id}>
					<td><a href={'/#authors/' + author.id}>{author.id}</a></td>
					<td>{author.firstName} {author.lastName}</td>
				</tr>
			);
		};
		return (
			<div>
				<table className='table'>
					<thead>
						<th>ID</th>
						<th>Name</th>
					</thead>
					<tbody>
						{this.props.authors.map(createAuthorRow, this)}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = AuthorList;