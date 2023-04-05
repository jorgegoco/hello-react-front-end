import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Greetings from './components/Greetings';
import { getGreeting } from './redux/greeting/greetingSlice';

const App = () => {
  const dispatch = useDispatch();
  dispatch(getGreeting());

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greetings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
