import { BrowserRouter,Routes,Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

import './App.css';
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import Service from './component/Service';


function App() {
  return ( <BrowserRouter>

  <Header/>
 
<Routes>

<Route  exact path='/' element= {<Home/>}/>
<Route  exact path='/service' element= {<Service/>}/>
<Route  exact path='/contact' element= {<Contact/>}/>
<Route  exact path='/About' element= {<About/>}/>

</Routes>
     
     <Footer/>
    </BrowserRouter>
  
  );
}

export default App;
