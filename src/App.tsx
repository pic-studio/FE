import {Suspense} from 'react'
import Router from './Router';
import "./assets/font/index.css"

function App() {
  return (
    <div>
      <Suspense>
        <Router/>
      </Suspense>
    </div>
  )
}

export default App
