import {Suspense} from 'react'
import Router from './Router';
import "./assets/font/index.css"

function App() {
  return (
    <Suspense>
      <Router/>
    </Suspense>
  )
}

export default App
