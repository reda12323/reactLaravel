import React, { useState } from 'react';
import Accueil from './Por/Accueil';
import Propos from './Por/Propos';
import { Routes, Route } from 'react-router-dom';
import Scroll from './Por/Scroll';
import { SignUp } from './Por/SignUp';
import Contacte from './Por/Contacte';
import Products from './Por/Products';
import Products2 from './Por/Products2';
import Boutique from './Por/Boutique';
import Promotion from './Por/Promotion';
function App() {
  const [results,setResults] = useState([]);

  return (
    <div>
       {/* Retirez ce BrowserRouter */}
       
          <Routes>
            <Route path="/" element={<Accueil setResults={setResults} results={results} />} />
            <Route path='/props' element={<Propos setResults={setResults} results={results} />}/>
            <Route path='/account' element={<SignUp/>}/>
            <Route path='/contacte' element={<Contacte setResults={setResults} results={results} />}/>
            <Route path="/product/:id" element={<Products  setResults={setResults} results={results} />}/>
            <Route path="/product2/:id" element={<Products2  setResults={setResults} results={results} />}/>
            <Route path='/boutique' element={<Boutique setResults={setResults} results={results} />}/>
            <Route path='/promotion' element={<Promotion setResults={setResults} results={results} />}/>
          </Routes>
        
        
       {/* Retirez ce BrowserRouter */}
       <Scroll/>
    </div>
  );
}

export default App;