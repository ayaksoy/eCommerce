import React, { useState } from "react";
import CartProductList from "../components/CartProductList";
import { useSelector, useDispatch } from "react-redux";
import { createOrder } from "../features/orderSlice";
import { createOrderItem } from "../features/orderItemSlice";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Swal from "sweetalert2";

export default function Cart() {
	const cart = useSelector((state) => state.product.cart);
	const dispatch = useDispatch();
	const [customerFullName, setCustomerFullName] = useState("");
	const [address, setAddress] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

	const handlePlaceOrder = async () => {
		if (!customerFullName || !address || !phoneNumber) {
			Swal.fire("Hata!", "Lütfen tüm alanları doldurun.", "error");
			return;
		}

		const newOrder = {
			customerFullName,
			address,
			phoneNumber,
			status: "sipariş verildi",
		};

		try {
			// Siparişi oluştur
			const actionResult = await dispatch(createOrder(newOrder));
			const orderId = actionResult.payload.id;

			if (orderId) {
				// OrderItem'ları oluştur
				cart.forEach((item) => {
					const newOrderItem = {
						orderId,
						productId: item.id,
						quantity: item.quantity,
					};
					dispatch(createOrderItem(newOrderItem));
				});

				// Sipariş başarılı olduğunda
				Swal.fire("Başarılı!", "Siparişiniz başarıyla alındı.", "success");

				// Sepeti sıfırla
				dispatch({ type: "product/clearCart" });

				// Form alanlarını temizle
				setCustomerFullName("");
				setAddress("");
				setPhoneNumber("");
			}
		} catch (error) {
			Swal.fire("Hata!", "Sipariş sırasında bir hata oluştu.", "error");
		}
	};

	return (
		<div>
			<TopHeader />
			<Header />
			<div className="breadcrumb-wrap">
				<div className="container">
					<ul className="breadcrumb">
						<li className="breadcrumb-item">
							<a href="#">Home</a>
						</li>
						<li className="breadcrumb-item">
							<a href="#">Products</a>
						</li>
						<li className="breadcrumb-item active">Cart</li>
					</ul>
				</div>
			</div>
			<CartProductList cart={cart} />
			<div className="container">
				<h2>Customer</h2>
				<div className="form-group">
					<label>Full Name</label>
					<input
						type="text"
						className="form-control"
						value={customerFullName}
						onChange={(e) => setCustomerFullName(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label>Address</label>
					<input
						type="text"
						className="form-control"
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label>Phone Number</label>
					<input
						type="text"
						className="form-control"
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
					/>
				</div>
				<button className="btn btn-primary" onClick={handlePlaceOrder}>
					Place Order
				</button>
			</div>
			<Footer />
		</div>
	);
}
