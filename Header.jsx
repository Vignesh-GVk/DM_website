import React, { useEffect, useState } from 'react'
import '../Component/Header.css';
import logo from '../Assets/banner-logo.png'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";





  

const Header = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
      window.addEventListener('scroll', () => {
          window.scrollY > 50 ? setSticky(true) : setSticky(false);
      })
  }, [])
  return (
    <div className=''  >


<Navbar collapseOnSelect expand="lg" fixed='top'  className={` ${sticky ? 'dark-nav' : ''} `}  >
        <Container >
          <div className=' navbar-brand'>
            <img src={logo} alt='#' style={{ width: '70px', height: '70px' }} />
          </div>


          <Navbar.Toggle className='icon2' aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className='icon1 ' id="responsive-navbar-nav" >
            <Nav className="ms-auto mx-auto">

           <Link to='/' className='mx-4 h6  text-light' style={{textDecoration:'none'}}>Home</Link>
           
           <Link to='/about'className='mx-4 h6  text-light'style={{textDecoration:'none'}}>About </Link>
              {/* <Nav.Link href="#home" className='ps-5 text-light h6'>Home</Nav.Link>
              <Nav.Link href="#aboutus" className='ps-5 text-light h6'>Aboutus</Nav.Link>
              <Nav.Link href="#services" className='ps-5 text-light h6'>Treatments</Nav.Link>
              <Nav.Link href="#services" className='ps-5 text-light h6'>Doctors</Nav.Link>
              <Nav.Link href="#services" className='ps-5 text-light h6'>Branches</Nav.Link> */}


            
            </Nav>
            <button className=' button' style={{padding:'4px 25px ',borderRadius:'5px',fontFamily:'poppins'}}>Appointment</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>


  )
}

export default Header