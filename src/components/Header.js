// md-midle sm-small lg-large xl-Xlarge //

import React, { Component } from 'react';
import { 
        Container,
        FormControl,
        Nav, 
        Navbar, 
        Form, 
    Button
    } from 'react-bootstrap';
import logo from './logo192.png';                                       
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import Blog from '../pages/Blog';

export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' > 
                    <Container>
                        <Navbar.Brand herf='/' >
                            <img
                            src='https://img.icons8.com/fluent/2x/bitcoin.png'
                            height='30'
                            width='30'
                            className='d-inline-block align-top'
                            alt='Logo'
                            />Crypto cappers
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className='mr-auto'>
                                <Nav.Link href='/'> Home </Nav.Link>
                                <Nav.Link href='/about'> About us </Nav.Link>
                                <Nav.Link href='/contacts'> Contacts </Nav.Link>
                                <Nav.Link href='/blog'> Blog </Nav.Link>
                            </Nav>         
                        </Navbar.Collapse>
                        <Form className="d-flex">
                                <div>
                                    <FormControl 
                                        type='text'
                                        placeholder='Search'
                                        className='mr-ms-2'
                                    />
                                </div>
                            </Form>
                            <Form>
                            <Button variant='warning' className='ms-2'>Search</Button>  
                            </Form>
                    </Container>
                </Navbar>

                <Router>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/contacts' component={Contacts} />
                        <Route exact path='/blog' component={Blog} />
                    </Switch>
                </Router>
            </div>
        )
    }
}