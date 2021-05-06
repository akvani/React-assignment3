import React, { Component } from 'react'
import axios from 'axios';
import {Card,Container,Row,Col} from 'react-bootstrap';

export default class ReadNow extends Component {
    constructor(){
        super();
        this.state = {readNowdata : [] };       
          
    }
    componentDidMount()
    {
        axios.get('http://localhost:3001/api/v1/news',
        {
          headers : {
          'Content-type':'application/json',
          'Authorization':`Bearer ${localStorage.getItem("mytoken")}`
          }} ).then(   
           (res)=>{                
           console.log(res.data);
           this.setState({readNowdata : res.data});
           
           console.log(this.props.readNowdata)
         
           }
     
       )
       .catch( (e)=>console.log(e))
    }


    render() {    

        return (
            <div>
<Container fluid><Row>
                {this.state.readNowdata.map((news) => <Col md={3} sm={6} xs={12} > <Card >
                    <Card.Img variant="top" src={news.urlToImage} />
                    <Card.Body>
                        <Card.Title><a href={news.url}>{news.title}</a></Card.Title>
                        <Card.Text>
                            {news.description}
                        </Card.Text>
                        <Card.Text>
                            <b>Author:</b> {news.author ? news.author : 'NA'}
                        </Card.Text>

                    </Card.Body>
                </Card></Col>)}
            </Row></Container>
            </div>
        )
    }
}
