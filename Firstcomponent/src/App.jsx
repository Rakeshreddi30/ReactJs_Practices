import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserDetails from './UserDetails'
let array = [{
  "id":1,
  "firstName":"Rakesh",
  "lastName": "Reddy",
  "profile" : "./images/pic.jpeg",
  "posts":360,
  "followers":999,
  "following":1,
  "text":"Follow"
},
{
  "id":2,
  "firstName":"Pooja",
  "lastName": "Reddy",
  "profile" : "./images/pooja.png",
  "posts":267,
  "followers":999,
  "following":1,
  "text":"Follow"
}]
function App() {
  const [count, setCount] = useState(array)
    // console.log(count);
  return (
    <>
    <UserDetails data={count}/>
    </>
  )
}

export default App
