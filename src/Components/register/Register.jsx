import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

export default class Register extends Component {
    render() {
        return (
            <div>
                 <Container style={{ padding: '20px' }}>
            <Row className="justify-content-md-center">
                <Col className="bg-light" md={'4'} style={{ padding: '20px' }} >
                <Form >
                    <Form.Group controlId="formFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter first name" />
                    </Form.Group>
                    <Form.Group controlId="formLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter last name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="text" placeholder="Enter userid" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password" />
                    </Form.Group>
                    <Form.Group controlId="formConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter confirm password" />
                    </Form.Group>


                    <Button type="submit" variant='primary' class='btn-primary'>Submit</Button>
                </Form>
            </Col></Row>
        </Container>
            </div>
        )
    }
}
