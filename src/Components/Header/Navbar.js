import React from 'react'
import './Navbar.css';
import {  Container, Row,  Col } from 'reactstrap';
import { FaShoppingBag,FaSistrix,FaRegHeart} from 'react-icons/fa';
// import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import { Link, NavLink } from 'react-router-dom';
import Men from './Home/Men';
import Women from './Home/Women';
import Login from './Home/Login';

const Navbar = () => {
    return(
        <div className='Navbar'>
            <Container>
                <Row className='d-flex'>
                    <Col className='left-menu'>
                        <div className='Logo-div'>
                            <Link to='/'>
                             <img src="https://images.bewakoof.com/logos/bewakoof-logo-og.png"></img>
                             </Link>
                        </div>
                        <div className='nav-menus'>
                            <ul>
                                <li className='active'>
                                <Link  to='/Men'><a >Men</a></Link>
                                </li>
                                <li>
                                    <a><NavLink exact to='/women'>Women</NavLink></a>
                                </li>
                                <li>
                                    <a>Accessories</a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col className='right-menu'>
                        <div className='search-box '>
                        <FaSistrix />
                        <form className='search-control'>
                            
                            <input type='text' placeholder='Search by product, category or collection'></input>
                        </form>
                        </div>
                        <Link to='/Login'>
                        <div className='login px-3'>
                            login
                        </div>
                        </Link>
                        <div className='whislist-icon'>
                        <FaRegHeart />
                        </div>
                        <div className='cart-icon'>
                        <FaShoppingBag/>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Navbar;