import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import SideBar from '../../Components/UI/SideBar/SideBar';
import Products from '../../Components/Products/Products';
import Modal from '../../Components/UI/Modal/Modal';
import ProductDetails from '../ProductDetails/ProductDetails';
//import axios from 'axios';

const CATEGORIES = {
	'HealthCare' : [
		"ApplianceCombos",
		"BPMonitorBulbs", 
		"BPMonitorCuffs", 
		"Glucometers", 
		"GlucometerStrips",
		"HeatingPads", 
		"HearingAids", ],

	'PersonalCare' : [
		"GroomingKit",
		"HairCurlers",
		"HairDryers",
		"HairStraighteners",
		"Trimmers"]
}
class categoryPage extends Component {
	state = {
		currentCategory : 'PersonalCare' + '_' + CATEGORIES.PersonalCare[2],
		cartShow: false,
		productDetailsShow: false,
		products: [],
		showProductDetails:false,
		selectedProduct:1
	}

	updatecategory = false;
	
	componentDidUpdate () {
		if(!this.state.products || (!this.updatecategory && this.state.products)){
			this.updatecategory = true;
			fetch(`http://101.53.137.41/api/?cat=Electronics_HealthandPersonalCare_${this.state.currentCategory}&count=9&offset=0`)
			.then(response=> response.json())
			.then (response => {
				this.setState({products:response});
				console.log(this.state.products);
		})}
	}

   	updateCurrentCategoryHandler = (category) => {
   		if(category!==this.state.currentCategory){
   		this.setState({
   			currentCategory: category
   		})}
   		this.updatecategory = false;
   	}

	
   	selectProductHandler = (selectProduct) => {
   		if(selectProduct!==this.state.selectedProduct){
	   		this.setState({
	   			showProductDetails:true,
	   			selectedProduct:selectProduct
   		})}
   	}

   	hideProductDetailsHandler = () => {
   		this.setState({
   			showProductDetails:false,
   			selectedProduct:null
   		})
   	}

   	

	render() {
		this.state.showProductDetails ?console.log(this.state.products[1]):console.log('false')
		return (
			<Aux>
				<Modal show={this.state.showProductDetails} hideProductDetails={() => this.hideProductDetailsHandler()}>
                     <ProductDetails show = {this.state.showProductDetails} product = {this.state.products[this.state.selectedProduct]}/>
                </Modal>
				<SideBar 
					categories = {CATEGORIES} 
					updateCategory = {this.updateCurrentCategoryHandler} />
				<Products 
					prod = {this.state.products} 
					category = {this.state.currentCategory}
					selectProduct = {this.selectProductHandler}/>
			</Aux>
		);
	}
}

export default categoryPage;

//