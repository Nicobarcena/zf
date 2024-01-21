import Home from './screens/Home';
import Carrusel from './screens/Carrusel';
import Uniformes from './screens/Uniformes';
import QuienesSomos from './screens/QuienesSomos';
import Contact from './screens/Contact';
import Nav from './componentes/Nav';
import Card from './componentes/Card'

function App() {
  return (
    <div className="App">
      
     <Nav/>
     <Home/>
     <Card/>
     <QuienesSomos/>
     <Carrusel/>
     <Uniformes />
     <Contact/>
    </div>
  );
}

export default App;
