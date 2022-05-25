import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser, getIsRefreshingUser, getError } from 'redux/auth';
import { PrivateRoute, PublicRoute } from './Routes';
import { Notify } from 'notiflix';
import Container from './Container';
import Home from './../views/Home/Home';
import Navbar from './Navbar/Navbar';
import Loader from './Loader';

const Login = lazy(() => import('../views/Login'));
const Register = lazy(() => import('../views/Register'));
const Contacts = lazy(() => import('../views/Contacts'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshingUser = useSelector(getIsRefreshingUser);
  const error = useSelector(getError);

  useEffect(() => {
    if (error) return Notify.failure(error);
    return;
  }, [error]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshingUser && (
      <>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <Contacts />
                </PrivateRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute restricted>
                  <Container title="Log in">
                    <Login />
                  </Container>
                </PublicRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute restricted>
                  <Container title="Register">
                    <Register />
                  </Container>
                </PublicRoute>
              }
            />
            <Route path="*" element={<Navigate to={'/'} />} />
          </Routes>
        </Suspense>
      </>
    )
  );
}
