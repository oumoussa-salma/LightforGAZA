import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './pages/';
import Prayer from './pages/Prayer';
import History from './pages/History';
import Action from './pages/Action';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef]">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/prayer" element={<Prayer />} />
            <Route path="/history" element={<History />} />
            <Route path="/action" element={<Action />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
