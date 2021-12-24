import './App.css'
import { useRoutes } from 'react-router-dom'
import { route } from '../src/route/route-map'

function App() {
  const elements = useRoutes(route)

  return (
    <div className="App">
      {elements}
    </div>
  )
}

export default App
