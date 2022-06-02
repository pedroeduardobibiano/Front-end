
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Products from './Products';
import './styles.css';
import Users from './Users';

const Admin = () => {
  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-content">
        <Routes>
          <Route>
            <Route path="/products" element={<Products/>} />
            <Route path="/categories" element={<h1>Ad</h1>} />
            <Route path="/users" element={<Users/>} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
