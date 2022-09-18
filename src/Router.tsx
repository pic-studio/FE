import { Route, Routes, useLocation } from 'react-router-dom';
// page
import Home from './page/Home';
import Sub from './page/Sub';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/sub' element={<Sub />}></Route>
    </Routes>
  )
}

export default Router;