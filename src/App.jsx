import { useRoutes } from 'react-router-dom'
import { pageRouter } from '../src/router/routerList'

function App () {
  const elements = useRoutes(pageRouter)
  return elements
}

export default App
