import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, addToCart } from "../features/productSlice";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

const FeaturedProducts = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.product.products);
	const cart = useSelector((state) => state.product.cart);
	const status = useSelector((state) => state.product.status);
	const error = useSelector((state) => state.product.error);

	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchProducts());
		}
	}, [status, dispatch]);

	const handleAddToCart = (product) => {
		const existingItem = cart.find((item) => item.id === product.id);

		if (existingItem) {
			if (existingItem.quantity < product.stock) {
				dispatch(
					addToCart({ ...product, quantity: existingItem.quantity + 1 })
				);
				Swal.fire({
					icon: "success",
					title: "Başarıyla Sepete Eklendi!",
					text: `${product.name} sepete eklendi.`,
				});
			} else {
				Swal.fire({
					icon: "error",
					title: "Stok Sınırı Aşıldı!",
					text: `Stok miktarından fazla ürün ekleyemezsiniz.`,
				});
			}
		} else {
			if (product.stock > 0) {
				dispatch(addToCart({ ...product, quantity: 1 }));
				Swal.fire({
					icon: "success",
					title: "Başarıyla Sepete Eklendi!",
					text: `${product.name} sepete eklendi.`,
				});
			} else {
				Swal.fire({
					icon: "error",
					title: "Stokta Yok!",
					text: `Bu ürün stokta mevcut değil.`,
				});
			}
		}
	};

	// İlk 4 ürünü göstermek için slice kullanın
	const featuredProducts = products.slice(0, 4);

	let content;

	if (status === "loading") {
		content = <p>Loading...</p>;
	} else if (status === "failed") {
		content = <p>Error: {error}</p>;
	} else {
		content = featuredProducts.map((product) => (
			<div className="col-lg-3" key={product.id}>
				<div className="product-item">
					<div className="product-image">
						<a href={`/products/${product.id}`}>
							<img src={product.imageUrl} alt={product.name} height="350px" />
						</a>
						<div className="product-action">
							<a href="#" onClick={() => handleAddToCart(product)}>
								<i className="fa fa-cart-plus"></i>
							</a>
						</div>
					</div>
					<div className="product-content">
						<div className="title">
							<a href={`/products/${product.id}`}>{product.name}</a>
						</div>
						<div className="rating">
							{[...Array(5)].map((_, index) => (
								<i className="fa fa-star" key={index}></i>
							))}
						</div>
						<div className="price">
							${product.price} <span>${product.oldPrice}</span>
						</div>
					</div>
				</div>
			</div>
		));
	}

	return (
		<div className="featured-product">
			<div className="container">
				<div className="section-header">
					<h3>Featured Product</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
						viverra at massa sit amet ultricies. Nullam consequat, mauris non
						interdum cursus.
					</p>
				</div>
				<div className="row align-items-center product-slider product-slider-4">
					{content}
				</div>
			</div>
		</div>
	);
};

export default FeaturedProducts;
