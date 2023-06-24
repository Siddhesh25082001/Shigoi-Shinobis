import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from './screens/Index'
import AboutUs from './screens/AboutUs'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}/>
          <Route path="/about" element={<AboutUs />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;