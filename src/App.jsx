import './App.css'
import Star from './components/Star/Star'
import Badges from './components/Badge/Badges'

function App() {


  return (
    <>
      <h1>Welcome to React Component Library</h1>
      <Star onToggle={() => console.log('component loaded')}/>
      <Badges/>
    </>
  )
}

export default App
