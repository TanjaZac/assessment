import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStateProvider } from './context/GlobalState';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';
import AboutPage from './pages/AboutPage';
import './App.css';

function App() {
  return (
    <GlobalStateProvider>
      <Router>
        <div className="App">
          <Navigation />
          <main style={{ padding: '2rem' }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/todos" element={<TodoPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </GlobalStateProvider>
  );
}

export default App;
