import React  from 'react'
import banner1 from '../Assets/WEB ICONS-01.png'
import banner2 from '../Assets/WEB ICONS-02.png'
import banner3 from '../Assets/WEB ICONS-03.png'
import banner4 from '../Assets/WEB ICONS-04.png'
import banner5 from '../Assets/WEB ICONS-05.png'
import banner6 from '../Assets/WEB ICONS-06.png'
import banner7 from '../Assets/WEB ICONS-07.png'
import banner8 from '../Assets/WEB ICONS-08.png'
import banner9 from '../Assets/WEB ICONS-09.png'
import banner10 from '../Assets/WEB ICONS-10.png'
import therapy from '../Assets/therapy.jpg'

import '../Component/Section4.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from 'react-bootstrap/esm/Container';


const Section4 = () => {

  var settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    initialSlide: 0,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    
  }
  return (
<div className='mt-5 section4' style={{minHeight:"95vh"}}>
<div  style={{position:'relative'}}>
  <div>
<img src={therapy} alt='@ ' className='therapy' style={{width:'100%',zIndex:'-999',filter:'blur(8px)',objectFit:'cover',height:'80vh'}}/>

<div className='mx-auto w-100' style={{position:'absolute',top:'70px',zIndex:'999'}}>
      <h1 className='text-center'>Therapies</h1>
 <div className="slider-container mt-5  sliding text-center"   >
<Container>
<Slider {...settings} >
  <div className='mt-5'>
  <img  src={banner1} alt='#' style={{width:'55%'}}/>
  <h6 className='text-start mt-4 mt-3' style={{fontWeight:'bold'}}>Colon hydro <br/> therapy</h6>
  </div>
  <div className='mt-5'>
  <img src={banner2} alt='#' style={{width:'55%'}}/>
  <h6 className='text-start mt-4' style={{fontWeight:'bold'}}>Mud bath</h6>
  </div>
  <div  className='mt-5'>
  <img src={banner3} alt='#' style={{width:'55%'}}/>
  <h6 className='text-start mt-4' style={{fontWeight:'bold'}}>Banana Leaf  <br/>Bath</h6>
  </div>
  <div className='mt-5'>
  <img src={banner4} alt='#' style={{width:'55%'}}/>
  <h6 className='text-start mt-4' style={{fontWeight:'bold'}}>Steam Bath</h6>
  </div>
  <div className='mt-5'>
  <img src={banner5} alt='#' style={{width:'55%'}}/>
  <h6 className='text-start mt-4' style={{fontWeight:'bold'}}>Varma Therapy</h6>
  </div>
  <div className='mt-5'>
  <img src={banner6} alt='#' style={{width:'55%'}}/>
  <h6 className='text-start mt-4' style={{fontWeight:'bold'}}>Sirodhora</h6>
  </div>
  <div className='mt-5'>
  <img src={banner7} alt='#' style={{width:'55%'}}/>
  <h6 className='text-start mt-4' style={{fontWeight:'bold'}}>Ennai Kattu</h6>
  </div>
  <div className='mt-5'>
  <img src={banner8} alt='#' style={{width:'55%'}}/>
  <h6 className='text-start mt-4' style={{fontWeight:'bold'}}>Ottradam</h6>
  </div>
  <div className='mt-5'>
  <img src={banner9} alt='#' style={{width:'55%'}}/>
  <h6 className='text-start mt-4' style={{fontWeight:'bold'}}>Pugai  <br/>(Fumigation)</h6>
  </div>
  <div className='mt-5'>
  <img src={banner10} alt='#' style={{width:'55%'}}/>
  <h6 className='text-start mt-4' style={{fontWeight:'bold'}}>Hydro Therapy</h6>
  </div>
 
</Slider>
</Container>
</div>
</div>
</div>
</div>
</div>

 
  )
}

export default Section4