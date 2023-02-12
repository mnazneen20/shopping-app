import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './Components/Navbar';
import ShopContextProvider from './Contexts/ShopContextProvider'
import Singleproduct from './pages/Singleproduct';

function App() {
  return (
    <div className="maincontainer">
      <ShopContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product' element={<Singleproduct />} />
        </Routes>
      </ShopContextProvider>
    </div>
  );
}

export default App;