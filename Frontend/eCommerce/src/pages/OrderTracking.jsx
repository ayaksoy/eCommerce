import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrderById } from "../features/orderSlice";
import { useParams } from "react-router-dom";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Swal from "sweetalert2";

const OrderTracking = () => {
	const { orderId } = useParams();
	const dispatch = useDispatch();
	const orderDetails = useSelector((state) => state.order.orderDetails);
	const status = useSelector((state) => state.order.status);
	const error = useSelector((state) => state.order.error);
	const [trackingId, setTrackingId] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		if (orderId) {
			dispatch(fetchOrderById(orderId));
		}
	}, [dispatch, orderId]);

	const handleSearch = async () => {
		if (!trackingId) {
			Swal.fire("Hata!", "Lütfen geçerli bir takip numarası girin.", "error");
			return;
		}

		// TRxTRCK önekini temizle
		const orderIdToSearch = trackingId.replace(/^TRxTRCK/, "").trim();

		try {
			const order = await dispatch(fetchOrderById(orderIdToSearch)).unwrap();
			// Eski veriyi temizle ve yeni sonuçları ekle
			setSearchResults([order]);
			setTrackingId(""); // Input'u temizle
		} catch (error) {
			Swal.fire(
				"Hata!",
				"Sipariş bulunamadı veya sorgulama sırasında bir hata oluştu.",
				"error"
			);
		}
	};

	if (status === "loading") return <p>Loading...</p>;
	if (status === "failed") return <p>Error: {error}</p>;

	return (
		<div>
			<TopHeader />
			<Header />
			<div className="container">
				<h2>Order Tracking</h2>
				<div className="form-group">
					<label>Enter Tracking Number</label>
					<input
						type="text"
						className="form-control"
						value={trackingId}
						onChange={(e) => setTrackingId(e.target.value)}
					/>
					<button className="btn btn-primary" onClick={handleSearch}>
						Search
					</button>
				</div>
				<div>
					{searchResults.length === 0 ? (
						<p>No details available</p>
					) : (
						searchResults.map((order, index) => (
							<div key={index} className="order-item">
								<p>
									<strong>Status:</strong> {order.status}
								</p>
								<p>
									<strong>Address:</strong> {order.address}
								</p>
							</div>
						))
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default OrderTracking;
