import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { 
  HomePage, 
  AboutPage, 
  ArticlePage, 
  ArticlesListPage
} 
from './pages';

import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <div id="page-body">
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/articles" element={<ArticlesListPage />} />
        <Route path="/articles/:articleId" element={<ArticlePage />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
