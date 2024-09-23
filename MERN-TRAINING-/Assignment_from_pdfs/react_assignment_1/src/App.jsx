import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import ProductCardList from './ProductCardList';

function App() {

  return (
    <>
      <Router>

        <NavBar />

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<ProductCardList/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
