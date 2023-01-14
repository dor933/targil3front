import React, { useEffect } from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import CreateRec from './Func_Comp/Createrec';
import Footer from './Func_Comp/Footer';
import Ingerd from './Func_Comp/Ingerd';
import Navb from './Func_Comp/Nav';
import Recipes from './Func_Comp/Recipes';
import Deleterec from './Func_Comp/Deleterec';

function App() {





  return (
    <div className="App" style={{height:"100vh"}}>

      <Navb />
      <Routes>
      <Route path="/" element={<Recipes />} /> 
      <Route path="/recipe" element={<CreateRec />} />
      <Route path="/ingerd" element={<Ingerd />} />
      <Route path="/deleterec" element={<Deleterec />} />
      </Routes>

      <Footer />
     
      

      


      </div>
      
      
      
   
  );
}

export default App;
