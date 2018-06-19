import React from 'react';
import classes from './Category.css';

const category = (props) => {
	return(
		props.subCategory.map(prKey => (
		<article 
			key = {prKey}
			className = {classes.Category} 
			onClick = {() => props.updateCategory(props.category + '_' + prKey)}>
			{prKey}
		</article>
	)));
}
export default category;