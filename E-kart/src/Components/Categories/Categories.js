import React from 'react';
import classes from './Categories.css'
import Category from './Category/Category';

const categories = (props) => {
	return(
		<div className = {classes.Categories}>
			{Object.keys(props.categories).map(category => (
				<div key = {category}>
				<h3 key = {category}>{category}</h3>
				<Category 
					category = {category} 
					subCategory = {props.categories[category]} 
					key = {props.categories[category]}
					updateCategory = {props.updateCategory} />
				</div>
			))}
		</div>
	);
}

export default categories;