import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import Home from 'assets/pages/Home';
import { Navbar } from 'components/Navbar';
import Catalog from 'assets/pages/Catalog';
import Admin from 'assets/pages/Admin';
import ProductDetails from 'assets/pages/ProductDetails';
import Auth from 'assets/pages/Admin/Auth';

const AppRoutes = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/blog" element={<Home />} />
      <Route path="/" element={<Catalog />} />
      <Route path="/products" element={<Catalog />} />
      <Route path="/products/:productId" element={<ProductDetails />} />
      <Route path="/admin" element={<Navigate to="/admin/products" replace />} />
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/admin/auth" element={<Navigate to="/admin/auth/login" replace />} />
      <Route path="/admin/auth/*" element={<Auth />} />
    </Routes>
  </Router>
);

export default AppRoutes;
