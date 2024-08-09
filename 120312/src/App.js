// ParentComponent.js
import React from 'react';
import { Routes,Route } from 'react-router-dom';
import ChildComponents from './components/ChildComponents';

function App() {
  return (
   <Routes>
    <Route path='/child-comp' element={<ChildComponents/>} />
   </Routes>
  );
}

export default App;
