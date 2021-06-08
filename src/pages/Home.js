import React, { Component } from 'react';
import CarouselBox from '../components/CarouselBox'
import Carousel from 'react-bootstrap/Carousel'
import { Container, CardDeck, Card, Button, CardGroup } from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
          <div>
            <CarouselBox />
            <p className='mt-4'>
                Sit irure do commodo aute excepteur occaecat. Aliqua quis adipisicing magna aliquip ad magna. Velit fugiat dolor consectetur id elit non mollit anim nostrud sunt fugiat mollit ipsum elit. Culpa sit eu cillum cupidatat ut ut minim nulla velit dolor.

Et Lorem amet veniam commodo incididunt. Cillum consequat labore dolor sunt magna mollit. Nulla sit esse pariatur officia cillum dolor ad magna elit.

Adipisicing officia et sunt ipsum in laboris excepteur non. Nulla ad ut adipisicing nisi eu esse duis fugiat id. Amet velit aliquip voluptate dolor ut enim magna aliqua aliquip nisi. Excepteur non officia aliqua aute ipsum reprehenderit eiusmod cupidatat tempor Lorem deserunt sunt magna dolor.
            </p>
            <Container>
                <h2 className='text-center m-4'>Our team</h2>
                <CardGroup className='m-3'>
                    <Card bg='dark' className='text-white'>
                        <Card.Img variant='top'
                        src='https://images.pexels.com/photos/285814/pexels-photo-285814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                        />
                        <Card.Body>
                            <Card.Title>Equipment</Card.Title>
                            <Card.Text>
                                Lorem
                            </Card.Text>
                            <Button variant='warning'>About team</Button>
                        </Card.Body>
                    </Card>

                    <Card bg='dark' className='text-white'>
                    <Card.Img variant='top'
                        src='https://images.pexels.com/photos/3733338/pexels-photo-3733338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                        />
                        <Card.Body>
                            <Card.Title>Instruments</Card.Title>
                            <Card.Text>
                                Lorem
                            </Card.Text>
                            <Button variant='warning'>About team</Button>
                        </Card.Body>
                        
                    </Card>

                    <Card bg='dark' className='text-white'>
                        <Card.Img variant='top'
                        src='https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
                        />
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                Lorem
                            </Card.Text>
                            <Button variant='warning'>About team</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Container>
          </div>
        );
    }
}

export default Home;