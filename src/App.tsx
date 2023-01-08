import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from '@organisms/index';
import { MainTemplate, PodcastTemplate } from '@templates/index';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainTemplate />} />
        <Route
          path="/podcast/:id/episode?/:ep?"
          element={<PodcastTemplate />}
        />
        <Route path="*" element={<MainTemplate />} />
      </Routes>
    </>
  );
}
