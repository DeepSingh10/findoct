import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './App.css';
import Doctors from './components/Doctorcards/Doctors'
import Findyourdoc from './components/Findyourdoc'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Register from './components/UserLogin/Register'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
    </div>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Doctors" element={<Doctors />}/>
        <Route path="/Findyourdoc" element={<Findyourdoc />} />
        <Route path="/Register" element={<Register />} />
        </Routes>
     </Router>
  );
}

export default App;
