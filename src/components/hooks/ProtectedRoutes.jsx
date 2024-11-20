import { Navigate } from 'react-router-dom';
import { useAuth } from './UserContext'; // Importa tu hook personalizado

const ProtectedRoute = ({ children }) => {
  const { isLogged } = useAuth();

  if (!isLogged) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute