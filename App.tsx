
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import HRHome from './views/HRHome';
import DesignPortfolio from './views/DesignPortfolio';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HRHome />} />
        <Route path="/design" element={<DesignPortfolio />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
