import './App.css'
import Star from './components/Star/Star'
import Badges from './components/Badge/Badges'
import Menu from './components/Menu/index'
import Banners from './components/Banner/Banners'
import Card from './components/Card/index'
import Testimonial from './components/Testimonials/index'
import TestimonialNoPic from './components/Testimonial-no-pic/index'
import imageUrl from 'src/assets/aiony-haust-3TLl_97HNJo-unsplash.jpg'
import Button from './components/Button/Button'
import ToastProvider, {useToast} from './components/Toasts/ToastProvider'


function App() {

  // refactor for the toast context.
  // to have the context I need to render it before initializing the addToast function. So ToastProvider renders, and renders the Initialapp with the addToast
  return (
    <ToastProvider>
        <InnerApp/>
    </ToastProvider>
  )
}


function InnerApp() {
  const {addToast} = useToast()

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


    <Testimonial
        name="Rocky Jane"
        title="CEO of RockScissorPaper"
        src={imageUrl}
        alt="Rocky Jane">
        <Testimonial.Description>Whenever my friends and I couldn’t decide where to eat or who had to take out the trash, we’d argue for hours—until we rediscovered the ancient wisdom of RSP. Now, every decision is quick, fair, and surprisingly intense.</Testimonial.Description>
    </Testimonial>


    <TestimonialNoPic
        name="Rocky Jane"
        title="CEO of RockScissorPaper">
        <Testimonial.Description>Whenever my friends and I couldn’t decide where to eat or who had to take out the trash, we’d argue for hours—until we rediscovered the ancient wisdom of RSP. Now, every decision is quick, fair, and surprisingly intense.</Testimonial.Description>
    </TestimonialNoPic>



      <h2>Toast Notifications</h2>
      <div className='btn-container'>
        <Button className='alert' onClick={() => {addToast('This is an alert!', 'alert')}}>Alert</Button>
        <Button className='neutral' onClick={() => {addToast('Information here', 'neutral')}}>Neutral</Button>
        <Button className='success' onClick={() => {addToast('Succesful click!', 'success')}}>Success</Button>

      </div>


    </>


  )
}

export default App
