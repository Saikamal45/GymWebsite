import 'bootstrap/dist/css/bootstrap.min.css';
import { Home} from "./components/Home";
import { About } from './components/About';
import { Services } from './components/Services';
import { ContactUs } from './components/ContactUs';
import { BrowserRouter, Route, Routes,} from "react-router-dom";
import { NavbarComponent } from './components/NavbarComponent';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <NavbarComponent/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/contact' element={<ContactUs/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
