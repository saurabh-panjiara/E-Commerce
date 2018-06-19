import React from 'react';
import Categories from '../../Categories/Categories';
import classes from './SideBar.css'

const sideBar = (props) => {
	return (
		<div className = {classes.SideBar}>
			<Categories categories = {props.categories} updateCategory = {props.updateCategory}/>
		</div>
	);
}

export default sideBar;