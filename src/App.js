import './App.css';
import Add from './components/Add';
import All from './components/All';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<All />}></Route>
        <Route path='/add' element={<Add />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
