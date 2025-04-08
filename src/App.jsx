import './App.css'
import Star from './components/Star/Star'
import Badges from './components/Badge/Badges'
import Menu from './components/Menu/index'
import Banners from './components/Banner/Banners'
import Card from './components/Card/index'

function App() {


  return (
    <>
      <h1>Welcome to React Component Library</h1>
      <Star onToggle={() => console.log('component loaded')}/>
      <Badges/>

      <Menu>
          <Menu.Button>Menu</Menu.Button>
          <Menu.Dropdown>
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>About</Menu.Item>
            <Menu.Item>Main</Menu.Item>
            <Menu.Item>Contact</Menu.Item>
          </Menu.Dropdown>
      </Menu>

      <Banners/>


      <Card>
        <Card.Title>Our Values</Card.Title>
        <Card.Description>Our company focuses on a personalized shopping experience.</Card.Description>
      </Card>
    </>
  )
}

export default App
