import React from 'react';

const person = (props) => {
	return (
		<div>
			<p onClick={props.click}>Hii iam <a href="#">{props.name}</a> and My Age {props.age}</p>
			<h6>{props.children}</h6>
			<input type="text" onChange={props.changed} value={props.name} />
		</div>
		) 
};

export default person;