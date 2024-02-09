import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Doctors from './components/Doctors';
import Appointment from './components/Appointment';
import Service from './components/Service';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path="/home"/>
        <Route element={<Doctors/>} path="/doctors"/>
        <Route element={<Service/>} path="/services"/>
        <Route element={<Appointment/>} path="/appoint"/>
      </Routes>

    </div>
  );
}

export default App;
