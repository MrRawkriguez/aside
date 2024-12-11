import './App.css'
import Greeting from './Greeting'

function App() {

const firstName = "Joe"
const lastName = "Schmoe"

  return (
    <section>
    <h1><Greeting />, {firstName} {lastName}. </h1>
    </section>
  )
}

export default App
