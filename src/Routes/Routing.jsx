import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Addmetings from '../pages/Addmetings'
import NotFound from '../pages/NotFound'

const Routing = () => {
  return (
   <>
   <Routes>
    <Route path='/' element= {<Home />} />
    <Route path='*' element= {<NotFound />} />
    <Route path='/home' element= {<Home />} />
    {/* <Route path='/myMeeting' element= {<Myme />} /> */}
    <Route path='/addMeeting' element= {<Addmetings />} />
   </Routes>
   </>
  )
}

export default Routing