import { Route, Routes } from 'react-router-dom';
// page
import Home from './page/Home';
import Component from './page/Component-test';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/component-test' element={<Component />}></Route>
    </Routes>
  )
}

export default Router;