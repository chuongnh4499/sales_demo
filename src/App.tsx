import './App.css';
import { useRoutes } from 'react-router-dom';
import { route } from '../src/route/route-map';
import NPProgress from 'nprogress';

NPProgress.configure({ showSpinner: false });


function App() {
  const elements = useRoutes(route)

  return (
    <>
      
      {elements}
    </>
  )
}

export default App