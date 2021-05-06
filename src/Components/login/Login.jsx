import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import {useHistory} from 'react-router-dom';
import axios from 'axios';

export default function Login() {
   

    
        const history=useHistory();
        const [username,setuserName]=useState('');
        const [password,setPassword]=useState('');   

        const Authenticate= (e)=>{
            e.preventDefault();
            axios.post('http://localhost:3001/auth/v1',
            { username, password },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(
                (res) => {

                    localStorage.setItem('mytoken', res.data.token);
                    localStorage.setItem('isAuthenticated', "true");
                    localStorage.setItem('username', username);
                    //document.getElementById('username').innerHTML = username;
                    //alert("logged in successfully")
                    history.push('Dashboard')

                }
            )
            .catch(e => console.log(e))

        }
        return (
            <div>
 <Container style={{ padding: '20px' }}>    
 <Row className="justify-content-md-center">
    <Col md={'4'} className="bg-light" style={{ padding: '20px' }} >
    <Form onSubmit={ (e)=>{
        console.log("Form Submited");
        Authenticate(e);
    }
    }>
  <Form.Group >
    <Form.Label>Enter User Name</Form.Label>
    <Form.Control id='userid' type="text" placeholder="Enter UserName" onChange={
                                (evt) => setuserName(evt.target.value)
                            } />
   
  </Form.Group>

  <Form.Group >
    <Form.Label>Password</Form.Label>
    <Form.Control id='password' type="password" placeholder="Password"  onChange={
                                (evt) => setPassword(evt.target.value)
                            } />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button className="btn-primary" variant="primary" type="submit">
    Submit
  </Button>
</Form>

      </Col>
  </Row>

</Container>
            </div>
        )
    }

