import './App.css';
import {Routes,Route} from "react-router-dom";
import LetterPad from './components/letterpad/letterpad';
import Login from './components/login';
import Home from './components/home';
import Billing from './components/billing/billing';

function App() {
  return (
    <>
    <div className="App">
        
    </div>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/billing' element={<Billing />} />
        <Route path='/letterpad' element={<LetterPad />} />
      </Routes></>
    
  );
}

export default App;
