import React from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import CreateRec from './Func_Comp/Createrec';
import Ingerd from './Func_Comp/Ingerd';
import MyNav from './Func_Comp/MyNav';
import Recipes from './Func_Comp/Recipes';
import Deleterec from './Func_Comp/Deleterec';
import Footer from './Func_Comp/Footer';

function App() {





  return (
    <div className="App" style={{height:"100vh"}}>

      {MyNav}
      <Routes>
      <Route path="/" element={<Recipes />} /> 
      <Route path="/recipe" element={<CreateRec />} />
      <Route path="/ingerd" element={<Ingerd />} />
      <Route path="/deleterec" element={<Deleterec />} />
      </Routes>
       {Footer}
            

      


      </div>
      
      
      
   
  );
}

export default App;
