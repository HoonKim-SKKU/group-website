import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import ResearchHighlightDetail from './components/ResearchHighlightDetail';
import TeamMemberDetail from './components/TeamMemberDetail';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research/:id" element={<ResearchHighlightDetail />} />
        <Route path="/team/:id" element={<TeamMemberDetail />} />
      </Routes>
    </Layout>
  );
}

export default App;
