import { Route, Routes } from
'react-router-dom';
import './App.css';
import Home  from '../src/components/Home/Home'
import Header from './components/Header/Header';
import Foods from './components/Foods/Foods';
import Orders from './components/Orders/Orders';
import Order from './components/Order/Order';
import Login from './components/Login/Login';
function App() {
  return (
    <div >
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/foods' element={<Foods></Foods>}></Route>
        <Route path='orders' element={<Orders></Orders>}></Route>
        <Route path='/order/:id' element={<Orders></Orders>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
