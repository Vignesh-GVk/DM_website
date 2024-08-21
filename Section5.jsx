import React from 'react'
import banner from '../Assets/chennai.png'
import banner1 from '../Assets/madurai.png'
import banner2 from '../Assets/ooty.png'
import banner3 from '../Assets/puducherry.png'
import banner4 from '../Assets/trichy.png'
import '../Component/Section5.css'




const Section5 = () => {
  return (
    <div style={{minHeight:'55vh'}} className='text-center branch'>
<h1 className='text-center'>Branches</h1>
<div className='d-flex mt-5 branches' style={{overflow:'hidden'}} >
  <div>
    <img src={banner} alt='#' style={{width:'75%'}} />
    <button className='mt-4 ' style={{padding:'3px 25px',borderRadius:"7px",fontFamily:'poppins'}} >Book now</button>

  </div>
  <div>
    <img src={banner1} alt='#'  style={{width:'75%'}}/>
    <button className='mt-4 ' style={{padding:'3px 25px',borderRadius:"7px",fontFamily:'poppins'}} >Book now</button>

  </div>
  <div >
    <img className='ooty' src={banner2} alt='#'  style={{width:'380px'}}/>
    <button className='mt-4  ' style={{padding:'3px 25px',borderRadius:"7px",fontFamily:'poppins'}} >Book now</button>

  </div>
  <div>
    <img src={banner3} alt='#'  style={{width:'75%'}}/>
    <button className='mt-4 ' style={{padding:'3px 25px',borderRadius:"7px",fontFamily:'poppins'}} >Book now</button>

  </div>
  <div>
    <img src={banner4} alt='#'  style={{width:'75%'}}/>
    <button className='mt-4 ' style={{padding:'3px 25px',borderRadius:"7px",fontFamily:'poppins'}} >Book now</button>

  </div>
</div>
    </div>
  )
}

export default Section5