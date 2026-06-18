import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
// import Card from './components/Card'
import CounterApp from './components/CounterApp'

function App() {
  const [count, setCount] = useState(0)

  return (
  //   <div>
  //     <Card
  // name="Dhruv"
  // className="12 class"
  // img="https://i.pinimg.com/474x/a6/35/97/a635970f604cb141c132f1b3184bce24.jpg"/>
  //     <br/>
  //     <Card
  //     name="Aliya"
  //     class="10 class"/>
  //     <br/>
  //     <Card
  //     name="Aman"
  //     class="09 class"/>
  //   </div>
    
     
     <CounterApp/>
  )
}

export default App
