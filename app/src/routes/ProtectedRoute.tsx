import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../store';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const auth = useSelector((state: RootState) => state.auth);

  if (auth.isAuthenticated) {
    return children;
  }

  return <Navigate to={'/login'} />;
};

export default ProtectedRoute;
