import React from 'react';
import { Table, Button } from 'reactstrap';

const CategoryList = () => {
  // Örnek kategori verisi
  const categories = [
    { id: 1, name: 'Kategori 1' },
    { id: 2, name: 'Kategori 2' },
  ];

  return (
    <div>
      <h2>Kategori Listesi</h2>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>İsim</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td>
                <Button color="danger" onClick={() => console.log('Sil:', category.id)}>Sil</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CategoryList;
