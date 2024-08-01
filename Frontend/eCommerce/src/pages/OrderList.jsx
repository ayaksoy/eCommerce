import React, { useEffect } from "react";
import { Table, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrders, deleteOrder } from "../features/orderSlice";
import { useNavigate } from "react-router-dom";

const OrderList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const orders = useSelector((state) => state.order.orders);
  const ordersStatus = useSelector((state) => state.order.status);
  const error = useSelector((state) => state.order.error);

  useEffect(() => {
    if (ordersStatus === "idle") {
      dispatch(fetchOrders());
    }
  }, [ordersStatus, dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Bu siparişi silmek istediğinizden emin misiniz?")) {
      dispatch(deleteOrder(id));
    }
  };

  if (ordersStatus === "loading") {
    return <div>Yükleniyor...</div>;
  }

  if (ordersStatus === "failed") {
    return <div>Hata: {error}</div>;
  }

  return (
    <div>
      <h2>Sipariş Listesi</h2>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Müşteri Adı</th>
            <th>Adres</th>
            <th>Telefon Numarası</th>
            <th>Toplam Tutar</th>
            <th>Sipariş Tarihi</th>
            <th>Durum</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(orders) && orders.length > 0 ? (
            orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customerFullName}</td>
                <td>{order.address}</td>
                <td>{order.phoneNumber}</td>
                <td>{order.totalAmount}</td>
                <td>{new Date(order.orderDate).toLocaleString()}</td>
                <td>{order.status}</td>
                <td>
                  <Button
                    color="success"
                    style={{ marginRight: "10px" }}
                    onClick={() => navigate(`/edit-order/${order.id}`)}
                  >
                    Düzenle
                  </Button>
                  <Button color="danger" onClick={() => handleDelete(order.id)}>
                    Sil
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">Siparişler bulunamadı</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default OrderList;
