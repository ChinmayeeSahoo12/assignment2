import React from 'react';
import {  Routes, Route } from 'react-router-dom';

import Centre from './Centre';
import Table from './Table';
const RoutesComponent = () => {
  return (
      <Routes>
        <Route path="/" element={<Centre />} />
        <Route path="/table" element={<Table />} />
      </Routes>
  );
};

export default RoutesComponent;
