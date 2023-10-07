import './App.css';
import {Routes,Route} from "react-router-dom";
import LetterPad from './components/admin/letterpad/letterpad';
import Login from './components/login';
import Home from './components/admin/home';
import JaiwinHome from './components/home';
import Billing from './components/admin/billing/billing';

function App() {
  return (
    <>
    <div className="App">
        
    </div>
    <Routes>
        <Route path='/AJE' element={<Home />} />
        <Route path='/' element={<JaiwinHome />} />
        <Route path='/AJE/login' element={<Login />} />
        <Route path='/AJE/billing' element={<Billing />} />
        <Route path='/AJE/letterpad' element={<LetterPad />} />
      </Routes></>
    
  );
}

export default App;
