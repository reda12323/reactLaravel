import React, { useState } from 'react';
import Accueil from './Por/Accueil';
import { Routes, Route } from 'react-router-dom';
  
function App() {
  const [results,setResults] = useState([]);

  return (
    <div>
       {/* Retirez ce BrowserRouter */}
        <Routes>
          <Route path="/" element={<Accueil setResults={setResults} results={results} />} />
        </Routes>
        
       {/* Retirez ce BrowserRouter */}
    </div>
  );
}

export default App;
