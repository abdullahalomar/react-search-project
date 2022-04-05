import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Voluntears from './components/Voluntears/Voluntears';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/main' element={<Main></Main>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/voluntears' element={<Voluntears></Voluntears>}></Route>
     </Routes>
    </div>
  );
}

export default App;
