import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutArea } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { StyleGuidePage } from './pages/StyleGuidePage';
import { BookInPage } from './pages/BookInPage';
import { TermsPage } from './pages/TermsPage';

export default function App() {
  const location = useLocation();

  return (
    <LayoutArea>
      <AnimatePresence mode="wait">
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/style-guide" element={<StyleGuidePage />} />
          <Route path="/book-in" element={<BookInPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </AnimatePresence>
    </LayoutArea>
  );
}
