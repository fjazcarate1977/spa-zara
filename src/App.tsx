import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from '@organisms/index';
import * as Templates from '@templates/index';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Templates.Main />} />
        <Route
          path="/podcast/:id/episode?/:ep?"
          element={<Templates.Podcast />}
        />
        <Route path="*" element={<Templates.Main />} />
      </Routes>
    </>
  );
}
