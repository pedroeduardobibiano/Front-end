import { Navigate , Route } from 'react-router-dom';
 
type Props = {
  children: React.ReactNode;
  path: string;
};
 
const PrivateRoute = ({ children, path }: Props) => {
 
  return (
    <Route
      path={path}
      element={<Navigate to="/admin/auth/login"
      replace/> }/>
  );
};
 
export default PrivateRoute;



