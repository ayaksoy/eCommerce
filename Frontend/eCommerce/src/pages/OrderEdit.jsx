import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateOrder, fetchOrders } from "../features/orderSlice";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const OrderEdit = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const orders = useSelector((state) => state.order.orders);
	const [status, setStatus] = useState("");

	const statusOptions = [
		"sipariş verildi",
		"sipariş onaylandı",
		"kargoya verildi",
		"dağıtıma çıktı",
		"teslim edildi",
	];

	useEffect(() => {
		if (orders.length === 0) {
			dispatch(fetchOrders());
		}
	}, [dispatch, orders.length]);

	useEffect(() => {
		const order = orders.find((order) => order.id === parseInt(id));
		if (order) {
			setStatus(order.status);
		}
	}, [orders, id]);

	const handleStatusChange = (e) => {
		setStatus(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(updateOrder({ id: parseInt(id), status })).then((result) => {
			if (result.meta.requestStatus === "fulfilled") {
				// Güncelleme başarılıysa siparişleri yeniden al ve yönlendir
				dispatch(fetchOrders()).then(() => {
					navigate("/admin/orders");
				});
			} else {
				// Hata durumunu burada ele alabilirsiniz
				console.error("Güncelleme başarısız.");
			}
		});
	};

	return (
		<div>
			<h2>Sipariş Düzenle</h2>
			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<Label for="status">Sipariş Durumu</Label>
					<Input
						type="select"
						id="status"
						value={status}
						onChange={handleStatusChange}
					>
						{statusOptions.map((option, index) => (
							<option key={index} value={option}>
								{option}
							</option>
						))}
					</Input>
				</FormGroup>
				<Button color="primary" type="submit">
					Güncelle
				</Button>
			</Form>
		</div>
	);
};

export default OrderEdit;
