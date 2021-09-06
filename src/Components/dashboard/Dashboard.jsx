import React, { Component } from 'react';
import axios from 'axios';
import Card from '../card/Cardcls';
import {Container,Row,Col} from 'react-bootstrap';

export default class Dashboard extends Component {
    constructor()
    {
        super();
       
        this.state = {
            name: "React"
          };
          this.state={Category : "buiness"};
          this.onChangeValue = this.onChangeValue.bind(this);
          this.state = {newsdata : [] };

    }
    componentDidMount()
    {  
        axios.get('https://newsapi.org/v2/top-headlines?category=business&apiKey=2b8b823d5cf54290bae7409fb2a80d38'
        //axios.get(`https://newsapi.org/v2/top-headlines?category=${this.state.Category}&apiKey=2b8b823d5cf54290bae7409fb2a80d38`        
 ).then(   
           (res)=>{                
          //  console.log(res.data);
           this.setState({newsdata : res.data.articles});
          // console.log(this.state.newsdata);
           }
     
       )
       .catch( (e)=>console.log(e))
    }
//     componentDidUpdate()
//     {
//         axios.get(`https://newsapi.org/v2/top-headlines?category=${this.state.Category}&apiKey=2b8b823d5cf54290bae7409fb2a80d38`        
//         //axios.get(`https://newsapi.org/v2/top-headlines?category={event.target.value}&apiKey=2b8b823d5cf54290bae7409fb2a80d38`
//  ).then(   
//            (res)=>{                
//           this.setState({newsdata : res.data.articles});
//                   }
     
//        )
//        .catch( (e)=>console.log(e))

//     }
    onChangeValue(event) {
       // console.log(event.target.value);
        this.setState({Category : event.target.value});
        axios.get(`https://newsapi.org/v2/top-headlines?category=${this.state.Category}&apiKey=2b8b823d5cf54290bae7409fb2a80d38`        
        //axios.get(`https://newsapi.org/v2/top-headlines?category={event.target.value}&apiKey=2b8b823d5cf54290bae7409fb2a80d38`
 ).then(   
           (res)=>{                
          this.setState({newsdata : res.data.articles});
                  }
     
       )
       .catch( (e)=>console.log(e))
      }

readLater= (mydata)=>
{
console.log("Inside Parent")
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
                <Container>
                    <Row>
                        <Col > 
           
                   <h3> Select Category to display news</h3>
<div className="form-check form-check-inline" onChange={this.onChangeValue} >
  <input className="form-check-input" type="radio" name="Category" id="business" value="business"></input>
  <label className="form-check-label" >Business</label>
</div>
<div className="form-check form-check-inline" onChange={this.onChangeValue}>
  <input className="form-check-input" type="radio" name="Category" id="entertainment" value="entertainment" ></input>
  <label className="form-check-label" >Entertainment</label>
</div>
{/* <div className="form-check form-check-inline" onChange={this.onChangeValue}>
  <input className="form-check-input" type="radio" name="Category" id="generalhealth" value="generalhealth"></input>
  <label className="form-check-label" >Generalhealth</label>
</div> */}
<div className="form-check form-check-inline" onChange={this.onChangeValue}>
  <input className="form-check-input" type="radio" name="Category" id="science" value="science"></input>
  <label className="form-check-label" >Science</label>
</div>
<div className="form-check form-check-inline" onChange={this.onChangeValue}>
  <input className="form-check-input" type="radio" name="Category" id="sports" value="sports"></input>
  <label className="form-check-label" >Sports</label>
</div>
<div className="form-check form-check-inline" onChange={this.onChangeValue}>
  <input className="form-check-input" type="radio" name="Category" id="technology" value="technology"></input>
  <label className="form-check-label" >Technology</label>
</div>

               <h1 className='h1'>{ this.state.Category} Headline</h1>
             
               </Col>
               </Row>
               </Container>           
                    
              { 
                           
              ( this.state.newsdata.map((article) => <Card key={article.url} article={article} readlaterevent={this.readLater} />))
              
               }
                    
          
  
            </div>
        )
    }
}
