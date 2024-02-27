import './App.css';
import { Route,Routes } from 'react-router-dom';
import Vidpage from './Components/Pages/Sliderpage';
import Main from './Main';
import Topmovpage from './Components/Pages/Topmovpage';
import Bollywoodpage from '../src/Components/Pages/Bollypage'
import Hollywoodpage from '../src/Components/Pages/Hollypage'
import Webseriespage from '../src/Components/Pages/Webseriespage'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='Vidpage/:id' element={<Vidpage/>}/>
        <Route path='Topmovpage/:id' element={<Topmovpage/>}/>
        <Route path='Bollywoodpage/:id' element={<Bollywoodpage/>}/>
        <Route path='Hollywoodpage/:id' element={<Hollywoodpage/>}/>
        <Route path='Webseriespage/:id' element={<Webseriespage/>}/>
      </Routes>
    </div>
  );
}

export default App;
