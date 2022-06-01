import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import './styles.css';
import Users from './User';

const Admin = () => {
  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-content">
        <Routes>
          <Route>
            <Route path="/products" element={<h1>aas</h1>} />
            <Route path="/categories" element={<h1>Ad</h1>} />
            <Route path="/users" element={<Users/>} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
