import Counter from './components/Counter'
import Effect from './components/Effect'
import Navbar from './components/Navbar'
import Parent from './components/Parent'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Service from './pages/Service'
import { Routes, Route } from 'react-router-dom'
const App = ()=>{
  return (
    <>
        <Navbar/>
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Service' element={<Service/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/Parent' element={<Parent/>}></Route>
          <Route path='/useState' element={<Counter/>}></Route>
          <Route path='/useEffect' element={<Effect/>}></Route>
        </Routes>
        </>
  )
}

export default App
