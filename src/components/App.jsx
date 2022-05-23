import { Routes, Route } from 'react-router-dom';
import Home from './../views/Home/Home';
import Navbar from './Navbar/Navbar';
import Contacts from '../views/Contacts';
import Login from './Login';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('useEffect');
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}
