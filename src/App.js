import './styles/App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Gallery from './components/Gallery/Gallery';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/gallery" element={ <Gallery /> } />
      </Routes>
    </Router>
  );
}

export default App;
