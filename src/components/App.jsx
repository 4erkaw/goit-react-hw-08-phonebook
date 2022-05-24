import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth';
import Home from './../views/Home/Home';
import Navbar from './Navbar/Navbar';
import Contacts from '../views/Contacts';
import Login from './Login';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
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
