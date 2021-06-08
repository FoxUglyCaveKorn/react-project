
import React, { Component } from 'react';
import {Container, Tab, Row, Nav, Col} from "react-bootstrap";


class About extends Component {
    render() {
        return (
            <Container className='mt-3'>
                <Tab.Container id='ledt-tabs-example' defaultActiveKey='first' className='mt-10'>
                    <Row>
                        <Col sm={3}>
                            <Nav variant='pills' className='flex-column mt-2'>
                                <Nav.Item>
                                    <Nav.Link eventKey='first'>Design</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey='second'>Team</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey='thrid'>Programming</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey='fourth'>Frameworks</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey='fivith'>Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col> 
                        <Col sm ={9}>
                            <Tab.Content className='mt-2'>
                                <Tab.Pane eventKey='first'>
                                    <img width='970' src = 'https://images.pexels.com/photos/7298597/pexels-photo-7298597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='img'/>
                                    <p>
                                    Eu dolore veniam do anim reprehenderit et et consequat duis labore. Dolor occaecat sit minim qui adipisicing amet eu et. Nulla minim voluptate est excepteur sint incididunt ut laboris esse tempor ad fugiat. Cillum nulla labore consectetur est aute. Dolor nostrud proident cillum qui ullamco pariatur sit deserunt quis elit fugiat aute. Laborum eiusmod aliquip enim duis veniam est consectetur deserunt reprehenderit laborum est Lorem pariatur est. Cupidatat pariatur irure velit incididunt eiusmod nostrud ullamco eiusmod eu consectetur.

Mollit exercitation tempor pariatur do officia velit laborum. Dolor do mollit velit sit proident nostrud consequat minim id ullamco. Adipisicing aliquip esse qui ad laborum esse. Sit mollit reprehenderit voluptate enim consectetur cupidatat. Officia et officia aute qui cupidatat non adipisicing culpa anim.

Qui Lorem exercitation nostrud amet aute eu dolor fugiat amet fugiat. Laboris incididunt nostrud occaecat occaecat quis. Laborum Lorem et qui voluptate. Laboris pariatur pariatur est aute. Laborum nulla ut incididunt exercitation ut exercitation aute non nostrud aliquip pariatur cupidatat mollit.

Duis pariatur tempor et minim cillum ullamco. Excepteur duis proident qui velit velit occaecat sit velit aliqua nulla. Nulla culpa voluptate ad non amet excepteur non tempor magna sit dolor in. Aliqua elit aliqua voluptate duis irure consequat deserunt qui. Officia aliqua consequat anim officia cillum dolore qui. Id ex ad labore non irure anim voluptate mollit esse officia elit laboris Lorem ad. Pariatur reprehenderit consectetur nostrud incididunt esse exercitation ad reprehenderit.
                                    </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey='second'>
                                    <img width='970' src = 'https://images.pexels.com/photos/7298597/pexels-photo-7298597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='img'/>
                                    <p>
                                        Eu dolore veniam do anim reprehenderit et et consequat duis labore. Dolor occaecat sit minim qui adipisicing amet eu et. Nulla minim voluptate est excepteur sint incididunt ut laboris esse tempor ad fugiat. Cillum nulla labore consectetur est aute. Dolor nostrud proident cillum qui ullamco pariatur sit deserunt quis elit fugiat aute. Laborum eiusmod aliquip enim duis veniam est consectetur deserunt reprehenderit laborum est Lorem pariatur est. Cupidatat pariatur irure velit incididunt eiusmod nostrud ullamco eiusmod eu consectetur.

Mollit exercitation tempor pariatur do officia velit laborum. Dolor do mollit velit sit proident nostrud consequat minim id ullamco. Adipisicing aliquip esse qui ad laborum esse. Sit mollit reprehenderit voluptate enim consectetur cupidatat. Officia et officia aute qui cupidatat non adipisicing culpa anim.

Qui Lorem exercitation nostrud amet aute eu dolor fugiat amet fugiat. Laboris incididunt nostrud occaecat occaecat quis. Laborum Lorem et qui voluptate. Laboris pariatur pariatur est aute. Laborum nulla ut incididunt exercitation ut exercitation aute non nostrud aliquip pariatur cupidatat mollit.

Duis pariatur tempor et minim cillum ullamco. Excepteur duis proident qui velit velit occaecat sit velit aliqua nulla. Nulla culpa voluptate ad non amet excepteur non tempor magna sit dolor in. Aliqua elit aliqua voluptate duis irure consequat deserunt qui. Officia aliqua consequat anim officia cillum dolore qui. Id ex ad labore non irure anim voluptate mollit esse officia elit laboris Lorem ad. Pariatur reprehenderit consectetur nostrud incididunt esse exercitation ad reprehenderit.
                                    </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey='thrid'>
                                    <img width='970' src = 'https://images.pexels.com/photos/7298597/pexels-photo-7298597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='img'/>
                                    <p>
                                    Eu dolore veniam do anim reprehenderit et et consequat duis labore. Dolor occaecat sit minim qui adipisicing amet eu et. Nulla minim voluptate est excepteur sint incididunt ut laboris esse tempor ad fugiat. Cillum nulla labore consectetur est aute. Dolor nostrud proident cillum qui ullamco pariatur sit deserunt quis elit fugiat aute. Laborum eiusmod aliquip enim duis veniam est consectetur deserunt reprehenderit laborum est Lorem pariatur est. Cupidatat pariatur irure velit incididunt eiusmod nostrud ullamco eiusmod eu consectetur.

Mollit exercitation tempor pariatur do officia velit laborum. Dolor do mollit velit sit proident nostrud consequat minim id ullamco. Adipisicing aliquip esse qui ad laborum esse. Sit mollit reprehenderit voluptate enim consectetur cupidatat. Officia et officia aute qui cupidatat non adipisicing culpa anim.

Qui Lorem exercitation nostrud amet aute eu dolor fugiat amet fugiat. Laboris incididunt nostrud occaecat occaecat quis. Laborum Lorem et qui voluptate. Laboris pariatur pariatur est aute. Laborum nulla ut incididunt exercitation ut exercitation aute non nostrud aliquip pariatur cupidatat mollit.

Duis pariatur tempor et minim cillum ullamco. Excepteur duis proident qui velit velit occaecat sit velit aliqua nulla. Nulla culpa voluptate ad non amet excepteur non tempor magna sit dolor in. Aliqua elit aliqua voluptate duis irure consequat deserunt qui. Officia aliqua consequat anim officia cillum dolore qui. Id ex ad labore non irure anim voluptate mollit esse officia elit laboris Lorem ad. Pariatur reprehenderit consectetur nostrud incididunt esse exercitation ad reprehenderit.
                                    </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey='fourth'>
                                    <img width='970' src = 'https://images.pexels.com/photos/7298597/pexels-photo-7298597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='img'/>
                                    <p>
                                    Eu dolore veniam do anim reprehenderit et et consequat duis labore. Dolor occaecat sit minim qui adipisicing amet eu et. Nulla minim voluptate est excepteur sint incididunt ut laboris esse tempor ad fugiat. Cillum nulla labore consectetur est aute. Dolor nostrud proident cillum qui ullamco pariatur sit deserunt quis elit fugiat aute. Laborum eiusmod aliquip enim duis veniam est consectetur deserunt reprehenderit laborum est Lorem pariatur est. Cupidatat pariatur irure velit incididunt eiusmod nostrud ullamco eiusmod eu consectetur.

Mollit exercitation tempor pariatur do officia velit laborum. Dolor do mollit velit sit proident nostrud consequat minim id ullamco. Adipisicing aliquip esse qui ad laborum esse. Sit mollit reprehenderit voluptate enim consectetur cupidatat. Officia et officia aute qui cupidatat non adipisicing culpa anim.

Qui Lorem exercitation nostrud amet aute eu dolor fugiat amet fugiat. Laboris incididunt nostrud occaecat occaecat quis. Laborum Lorem et qui voluptate. Laboris pariatur pariatur est aute. Laborum nulla ut incididunt exercitation ut exercitation aute non nostrud aliquip pariatur cupidatat mollit.

Duis pariatur tempor et minim cillum ullamco. Excepteur duis proident qui velit velit occaecat sit velit aliqua nulla. Nulla culpa voluptate ad non amet excepteur non tempor magna sit dolor in. Aliqua elit aliqua voluptate duis irure consequat deserunt qui. Officia aliqua consequat anim officia cillum dolore qui. Id ex ad labore non irure anim voluptate mollit esse officia elit laboris Lorem ad. Pariatur reprehenderit consectetur nostrud incididunt esse exercitation ad reprehenderit.
                                    </p>
                                </Tab.Pane>

                                <Tab.Pane eventKey='fivith'>
                                    <img width='970' src = 'https://images.pexels.com/photos/7298597/pexels-photo-7298597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='img'/>
                                    <p>
                                    Eu dolore veniam do anim reprehenderit et et consequat duis labore. Dolor occaecat sit minim qui adipisicing amet eu et. Nulla minim voluptate est excepteur sint incididunt ut laboris esse tempor ad fugiat. Cillum nulla labore consectetur est aute. Dolor nostrud proident cillum qui ullamco pariatur sit deserunt quis elit fugiat aute. Laborum eiusmod aliquip enim duis veniam est consectetur deserunt reprehenderit laborum est Lorem pariatur est. Cupidatat pariatur irure velit incididunt eiusmod nostrud ullamco eiusmod eu consectetur.

Mollit exercitation tempor pariatur do officia velit laborum. Dolor do mollit velit sit proident nostrud consequat minim id ullamco. Adipisicing aliquip esse qui ad laborum esse. Sit mollit reprehenderit voluptate enim consectetur cupidatat. Officia et officia aute qui cupidatat non adipisicing culpa anim.

Qui Lorem exercitation nostrud amet aute eu dolor fugiat amet fugiat. Laboris incididunt nostrud occaecat occaecat quis. Laborum Lorem et qui voluptate. Laboris pariatur pariatur est aute. Laborum nulla ut incididunt exercitation ut exercitation aute non nostrud aliquip pariatur cupidatat mollit.

Duis pariatur tempor et minim cillum ullamco. Excepteur duis proident qui velit velit occaecat sit velit aliqua nulla. Nulla culpa voluptate ad non amet excepteur non tempor magna sit dolor in. Aliqua elit aliqua voluptate duis irure consequat deserunt qui. Officia aliqua consequat anim officia cillum dolore qui. Id ex ad labore non irure anim voluptate mollit esse officia elit laboris Lorem ad. Pariatur reprehenderit consectetur nostrud incididunt esse exercitation ad reprehenderit.
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default About;