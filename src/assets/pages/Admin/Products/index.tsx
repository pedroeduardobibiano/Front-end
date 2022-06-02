import { List } from 'react-content-loader';
import { Route, Routes } from 'react-router-dom';
import Form from './List/Form';

const Products = () => {
  return (
    <Routes>
      <Route>
        <Route path="/admin/products" element={<List/>} />
        <Route path="/admin/products/:productId" element={<Form/>} />
      </Route>
    </Routes>
  );
};

export default Products;
