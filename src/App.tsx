import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { MainTemplate, PodcastTemplate } from '@templates/index';

export default function App() {
  return (
    <div>
      <nav className="w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-black text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-3xl"
              href="/"
            >
              Podcaster
            </a>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<MainTemplate />} />
        <Route
          path="/podcast/:id/episode?/:ep?"
          element={<PodcastTemplate />}
        />
        <Route path="*" element={<MainTemplate />} />
      </Routes>
    </div>
  );
}
