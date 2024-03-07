import React, { useState } from 'react';
import Accueil from './Por/Accueil';
import Propos from './Por/Propos';
import { Routes, Route } from 'react-router-dom';
import Scroll from './Por/Scroll';
import { SignUp } from './Por/SignUp';
import Contacte from './Por/Contacte';
  
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
        </Routes>
        
       {/* Retirez ce BrowserRouter */}
       <Scroll/>
    </div>
  );
}

export default App;
