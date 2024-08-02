import React, { useEffect } from "react";
import { Card, CardBody, CardTitle, CardText, Col, Row } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrders } from "../features/orderSlice";
import { fetchCategories } from "../features/categorySlice";
import { fetchProducts } from "../features/productSlice"; // Ürünlerin fetch edilmesi
import "../Dashboard.css";

const Dashboard = () => {
	const dispatch = useDispatch();
	const productsCount = useSelector((state) => state.product.products.length);
	const categoryCount = useSelector(
		(state) => state.category.categories.length
	);
	const ordersCount = useSelector((state) => state.order.orders.length);
	const ordersStatus = useSelector((state) => state.order.status);
	const categoriesStatus = useSelector((state) => state.category.status);

	useEffect(() => {
		if (ordersStatus === "idle") {
			dispatch(fetchOrders());
		}
		if (categoriesStatus === "idle") {
			dispatch(fetchCategories());
		}
		dispatch(fetchProducts()); // Ürünlerin fetch edilmesi
	}, [dispatch, ordersStatus, categoriesStatus]);

	return (
		<div className="container mt-4">
			<Row>
				<Col sm="12" md="4">
					<Card className="mb-4">
						<CardBody>
							<CardTitle tag="h5">Ürünler</CardTitle>
							<CardText className="display-4">{productsCount}</CardText>
							<CardText>Toplam ürün sayısı</CardText>
						</CardBody>
					</Card>
				</Col>
				<Col sm="12" md="4">
					<Card className="mb-4">
						<CardBody>
							<CardTitle tag="h5">Kategoriler</CardTitle>
							<CardText className="display-4">{categoryCount}</CardText>
							<CardText>Toplam kategori sayısı</CardText>
						</CardBody>
					</Card>
				</Col>
				<Col sm="12" md="4">
					<Card className="mb-4">
						<CardBody>
							<CardTitle tag="h5">Siparişler</CardTitle>
							<CardText className="display-4">{ordersCount}</CardText>
							<CardText>Toplam sipariş sayısı</CardText>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default Dashboard;
