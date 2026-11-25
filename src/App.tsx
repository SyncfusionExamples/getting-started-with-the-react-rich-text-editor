import { BrowserRouter as Router, Routes, Route } from 'react-router';
import './App.css';
import './Home.css';
import Home from './components/Home';
import RTE from './components/RTE';

function App() {
  return (
    <Router>
      <div className="app-container">
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rich-text-editor" element={<RTE />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
