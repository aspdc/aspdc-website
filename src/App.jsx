import {BrowserRouter as Routers, Routes, Route} from 'react-router-dom'
import Home from './templates/Home'
import Events from './templates/Events'
import Gallery from './templates/Gallery'
import Projects from './templates/Projects'
import LeaderBoard from './templates/Leaderboard'
import Resources from './templates/Resources'
import Navbar from './components/Navbar'


import './App.css'

function App() {
  return (
    <div className="main h-screen p-0 m-0 bg-black ">
                
        <Routers>

            <div className=''>

                <Routes className="">
                    <Route path='/' element={<Home/>} />
                    <Route path='/events' element={<Events/>} />
                    <Route path='/gallery' element={<Gallery/>} />
                    <Route path='/projects' element={<Projects/>} />
                    <Route path='/leaderBoard' element={<LeaderBoard/>} />
                    <Route path='/resources' element={<Resources/>} />
                </Routes>
            </div>
        </Routers>
    </div>
    )
}

export default App
