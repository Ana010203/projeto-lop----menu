import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from "./pages/inicio"
import Frango from "./pages/frango"
import Salada from "./pages/salada"
import Sobremesa from "./pages/sobremesa"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Inicio/>}/>
          <Route exact path="/salada" element={<Salada/>}/>
          <Route exact path="/frango" element={<Frango/>}/>
          <Route exact path="/sobremesa" element={<Sobremesa/>}/>
        </Routes>
      </Router>


    </div>
  );
}

export default App;
