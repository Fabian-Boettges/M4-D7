import { Navbar, Nav,} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const MyNavbar = () => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">STRIVEBOOKS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"> </Nav>
            <Nav>
            <Link to='/register'>Registration</Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default MyNavbar