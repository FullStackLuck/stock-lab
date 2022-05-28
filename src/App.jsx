import { Route,Routes } from 'react-router-dom';
import OneStock from './pages/oneStock';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import About from './pages/About';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About'element={<About/>}/>
        <Route path='/Stocks/:symbol' element={<OneStock/>}/>
        <Route path='/Stock'element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}
export default App;
