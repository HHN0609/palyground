import { Link } from "react-router-dom"
import { router } from "./router"
function App() {
  return (
    <>
      <h1>Playground</h1>
      {
        router.routes.map(({ path = '/' }) => {
          return (
            <div key={path}>
              <Link to={path}>{ path }</Link>
            </div>
          )
        })
      }
    </>
  )
}

export default App
