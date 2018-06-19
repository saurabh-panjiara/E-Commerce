import React from 'react';
import Product from './Product/Product';
import classes from './Products.css';

const products = (props) => {
	const items = Object.keys(props.prod).map(prKey => {
		return <Product 
					className = {classes.Product} 
					key = {props.prod[prKey].productId} 
					product = {props.prod[prKey]}
					clicked = {props.selectProduct}
					prKey = {prKey}/>;
	});
	return (
		<div className = {classes.ViewPage}>
			<div className = {classes.Category}>
				<h3>{props.category}</h3>
			</div>
			<div className = {classes.Products}>
				{items}
			</div>
		</div>
	);
}

export default products;