import React from 'react';
import classes from './Product.css';
import PropTypes from 'prop-types';

const product = (props) => (
	<div 
		className = {classes.Product}
		onClick = {() => props.clicked(props.prKey)}>
		<div className = {classes.Image}>
			<img 
				src = {props.product.imageUrlStr.slice(0,props.product.imageUrlStr.indexOf(";"))} 
				alt = {props.product.title}/>
		</div>
		<p className={classes.Title}>{props.product.title}</p>
		<p className={classes.Price}>₹{props.product.specialPrice}/-</p>
		<p>Explore!</p>
	</div>
);

export default product;