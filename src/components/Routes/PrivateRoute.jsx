import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

export function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  if (!isLoggedIn) return <Navigate to="/login" replace={true} />;
  else return children;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
