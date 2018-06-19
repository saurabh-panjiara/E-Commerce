import React, {Component} from 'react';
import classes from './ProductDetails.css';
import PropTypes from 'prop-types';
//import Aux from '../../../../hoc/Auxiliary';

class productDetails extends Component {
	
	state = {
		previewImg: null
	}

	setPreviewImgHandler = (img) => {
		this.setState({
			previewImg:img
		})
	}

	render(){
		if(this.props.show){
			const images = this.props.product.imageUrlStr.split(';').map(imgKey =>{
				return (
					<li>
						<img src={imgKey} 
							onClick = {() => this.setPreviewImgHandler(imgKey)
							height = 40px
							width = 40px}
							alt = {imgKey}/>
					</li>
				)
			})

			return (
				<div className="container">
					<div className={classes.card}>
						<div className="container-fliud">
							<div className="wrapper row">
								<div className={[classes.preview,'col-md-6'].join(' ')}>
									<div className={[classes.previewpic,classes.tabcontent].join(' ')}>
									  <div className={[classes.tab, 'active'].join(' ')} id="pic-1"><img src={this.state.previewImg} /></div>
									</div>
									<ul className={classes.previewthumbnail.navtabs}>
									  {images}
									</ul>
									
								</div>
								<div className={[classes.details,'col-md-6'].join(' ')}>
									<h3 className={classes.producttitle}>{this.props.product.productBrand} {this.props.product.title}</h3>	
									<p className={classes.productdescription}>{this.props.product.description}</p>
									<h4 className={classes.price}>Special Price: <span>₹{this.props.product.specialPrice}</span></h4>

									<div className={classes._34wn58}>
										<div className={classes._1pQ2tg}><span>Seller</span></div>
										<div>
											<div id="sellerName" className={classes._3HGjxn}>
												<span>
													<span>{this.props.product.sellerName}</span>
													<div className={[classes.hGSR34, classes._2beYZw, classes.YddkNl].join(' ')}>{this.props.product.sellerAverageRating} ★</div>
													<div>{this.props.product.sellerNoOfRatings} Ratings</div>
													<div>{this.props.product.sellerNoOfReviews} Reviews</div>
												</span>
											</div>
										</div>
									</div>

									<p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
									<div className="action">
										<button className={[classes.addtocart,"btn-default"].join(' ')} type="button">add to cart</button>
										<button className={["classes.like", "btn", "btn-default"].join(' ')} type="button"><span className={["fa","fa-heart"].join(' ')}></span></button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		}
		else return null
	}
}

export default productDetails;