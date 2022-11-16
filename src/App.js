import logo from './images/Logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import { Route, Routes } from 'react-router';
import About from './Components/About/About';
import Error from './Components/Error/Error';
import Orders from './Components/Orders/Orders';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Body></Body>}></Route>
        <Route path="/home" element={<Body></Body>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/orders" element={<Orders></Orders>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>      
    </div>
  );
}

export default App;
