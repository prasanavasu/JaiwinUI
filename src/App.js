import './App.css';
import {Routes,Route} from "react-router-dom";
import JaiwinHome from './components/home';
import JaiwinAbout from './components/about';
import JaiwinContact from './components/contact';
import JaiwinPrivacy from './components/privacy';
import JaiwinTerm from './components/term';
import JaiwinProduct from './components/products';
import JaiwinReturnPrivacy from './components/returnprivacy';

function App() {
  return (
    <>
    <div className="App">
        
    </div>
    <Routes>
        <Route path='/' element={<JaiwinHome />} />
        <Route path='/about' element={<JaiwinAbout />} />
        <Route path='/contact' element={<JaiwinContact />} />
        <Route path='/products' element={<JaiwinProduct />} />
        <Route path='/terms' element={<JaiwinTerm />} />
        <Route path='/privacy' element={<JaiwinPrivacy />} />
        <Route path='/refund-policy' element={<JaiwinReturnPrivacy />} />
      </Routes></>
    
  );
}

export default App;
