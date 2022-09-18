import { Route, Routes } from 'react-router-dom';
// page
import Home from './page/Home';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
    </Routes>
  )
}

export default Router;