import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from "./components/Home"
import Welcome from './components/Welcome';

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Welcome />} />
      </Routes>
    </>
  );
}

export default App;
