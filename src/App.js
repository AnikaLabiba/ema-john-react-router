import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Shop from './components/Shop/Shop';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/shop' element={<Shop></Shop>}></Route>
      </Routes>
    </div>
  );
}

export default App;
