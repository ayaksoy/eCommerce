import React from 'react';
import { Table, Button } from 'reactstrap';

const ProductList = () => {
  // Örnek ürün verisi
  const products = [
    { id: 1, name: 'Ürün 1', category: 'Kategori 1', price: 100 },
    { id: 2, name: 'Ürün 2', category: 'Kategori 2', price: 200 },
  ];

  return (
    <div>
      <h2>Ürün Listesi</h2>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>İsim</th>
            <th>Kategori</th>
            <th>Fiyat</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>
                <Button color="danger" onClick={() => console.log('Sil:', product.id)}>Sil</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ProductList;
