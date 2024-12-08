import { Button, Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../context/ShoppingCartContext';

function NavbarComponent() {
    const { openCart, cartQuantity } = useShoppingCart();
    return (
        <Navbar sticky='top' expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Shopping-Cart</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/store">Store</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Button onClick={openCart} style={{ width: "3rem", height: "3rem", position: "relative" }} variant='primary-outlined' className='rounded-circle'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg>
                    <div className='rounded-circle bg-danger d-flex justify-content-center align-item-center' style={{ color: 'white', height: '1.5rem', width: '1.5rem', position: 'absolute', bottom: 0, right: 0, transform: "translate(25%, 25%)" }}>{cartQuantity}</div>
                </Button>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;
