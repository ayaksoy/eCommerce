import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/productSlice";

export default function ProductDetailById() {
	const { id } = useParams(); // URL'den ürün ID'sini al
	const [product, setProduct] = useState(null);
	const dispatch = useDispatch(); // Redux aksiyonlarına erişim sağla

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const response = await axios.get(
					`http://localhost:5047/api/Product/${id}`
				);
				setProduct(response.data);
			} catch (error) {
				console.error("Ürün verisi alınırken hata oluştu:", error);
			}
		};

		fetchProduct();
	}, [id]);

	const handleAddToCart = () => {
		if (product) {
			dispatch(addToCart(product)); // Ürünü sepete ekle
		}
	};

	if (!product) {
		return <p>Loading...</p>;
	}

	return (
		<div className="product-detail">
			<div className="container">
				<div className="row">
					<div className="col-lg-9">
						<div className="row align-items-center product-detail-top">
							<div className="col-md-5">
								<div className="product-slider-single">
									<img src={product.imageUrl} alt={product.name} />
								</div>
							</div>
							<div className="col-md-7">
								<div className="product-content">
									<div className="title">
										<h2>{product.name}</h2>
									</div>
									<div className="price">${product.price}</div>
									<div className="details">
										<p>{product.description}</p>
									</div>

									<div className="action">
										<button
											onClick={handleAddToCart}
											className="btn btn-primary"
										>
											<i className="fa fa-cart-plus"></i> Add to Cart
										</button>
									</div>
								</div>
							</div>
						</div>

						<div className="row product-detail-bottom">
							<div className="col-lg-12">
								<ul className="nav nav-pills nav-justified">
									<li className="nav-item">
										<a
											className="nav-link active"
											data-toggle="pill"
											href="#description"
										>
											Description
										</a>
									</li>
								</ul>

								<div className="tab-content">
									<div id="description" className="container tab-pane active">
										<br />
										<h4>Product description</h4>
										<p>{product.description}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
