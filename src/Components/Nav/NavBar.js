import './NavBar.css'

import { Container, Nav, Navbar} from 'react-bootstrap'
import aslogo from '../../Media/aslogo.png'
import { useState } from 'react'


const NavBar = () => {
    const [background, setBackground] = useState(false);

    const changeBackground = () =>{
        if(window.scrollY > 0){
            setBackground(true);
        }else{
            setBackground(false);
        }
    }
    window.addEventListener('scroll', changeBackground)

    return (
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark" fixed="top" className={background ? 'navbar sticky' : 'navbar'}>
            <Container fluid>
            <Nav className='navbar-brand text-center' href='https://www.linkedin.com/in/agustinspitaleri/'><img src={aslogo} width="110"  alt="aslogo"/></Nav> 
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className="text-end">
                       
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
