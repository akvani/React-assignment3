import React, { Component } from 'react';
import axios from 'axios';
import {Jumbotron,Button,Container,Row,Col} from 'react-bootstrap';
import Card from '../card/Cardcls';

export default class Dashboard extends Component {
    constructor()
    {
        super();
        this.state = {newsdata : [] };

    }
    componentDidMount()
    {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=2b8b823d5cf54290bae7409fb2a80d38'         
 ).then(   
           (res)=>{                
           // console.log(res.data);
           this.setState({newsdata : res.data});
           console.log(this.state.newsdata);
           }
     
       )
       .catch( (e)=>console.log(e))
    }


readLater= (mydata)=>
{

  axios.post('http://localhost:3001/api/v1/news',mydata,
  {
    headers : {
    'Content-type':'application/json',
    'Authorization':`Bearer ${localStorage.getItem("mytoken")}`
    }
  })
  .then(
    (res)=>this.setState([...this.state.newsdata,res.data])
    
  )
  .catch(
    (err)=>console.log(err)
  )

}

    render() {
        return (
            <div>
               <h1 className='h1'>Today's Top Headlines</h1>
            
                    
              { 
               (this.state.newsdata).map((article) => <Card key={article.url} article={article} readlaterevent={this.readLater} />)
               }
                    
          
  
            </div>
        )
    }
}
