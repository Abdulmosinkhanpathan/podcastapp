import React from 'react'
import './index.css'
import Navbarapp from './Navbarapp'
import Login from './Login'
import {Routes,Route} from 'react-router-dom'
import p1 from './Videos/podcast1.mp4'
import p2 from './Videos/podcast9.mp4'
import p7 from './Videos/podcast3.mp4'
import p4 from './Videos/podcast4.mp4'
import p5 from './Videos/podcast5.mp4'
import p6 from './Videos/podcast6.mp4'
import UploadVideo from './UploadVideo'
const App = () => {
  return (
    <>
    <Navbarapp/>
          <h1 style={{marginTop:"25px"}}><span className='span1'>Video</span> <span className='span2'>Streaming Application</span></h1>
    <div className="app">
      <div className="row">
    <div className='div'>
      <video controls><source src={p1} type="video/mp4"/></video>
      <h3>The Library Podcast By Harry Featuring top ceo's.</h3>
    </div>
    <div className='div'>
    <video controls><source src={p2} type="video/mp4"/>
    </video>
    <h3>Unfiltered Conversations: Exploring the Human Experience</h3>
  </div>
  <div className='div'>
    <video controls><source src={p4} type="video/mp4"/>
    </video>
    <h3>Mind Matters: Navigating Mental Health in Today's World</h3>
  </div>
  </div>
  <div className="row">
  <div className='div'>
    <video controls><source src={p5} type="video/mp4"/>
    </video>
    <h3>Trailblazers: Stories of Innovation and Inspiration</h3>
  </div>
  <div className='div'>
    <video controls><source src={p6} type="video/mp4"/>
    </video>
    <h3>Cultural Kaleidoscope: Celebrating Diversity and Identity</h3>
  </div>
  <div className='div'>
    <video controls><source src={p7} type="video/mp4"/>
    </video>
    <h3>The Science of Everything: Unraveling the Mysteries of the Universe</h3>
  </div>
  </div>
  </div>
  <Routes>
    <Route path="/login" element={<Login/>}/>
    <Route path="/upload"element={<UploadVideo/>}/>
  </Routes>
  </>

  )
}

export default App
