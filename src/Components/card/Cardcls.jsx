import React, { Component } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap'

export default class Cardcls extends Component {
    constructor()
    {
        super();
        this.state = {readLaternewsdata : [] };

    }

    readLater=(readLaterData)=>
{ 

this.props.readLaterevent(readLaterData);
}
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                       
                    <div className="col-sm-6 col-md-6">
                        <div className="card" >
                        <img className="card-img-top" src={this.props.article.urlToImage} alt="Image News"></img>
                            <div className="card-body">
                                <h5 className="card-title"><a href={this.props.article.url}>{this.props.article.title}</a></h5>
                                <p className="card-text">{this.props.article.description}</p>
                                <p className="card-text"><b>Author:</b> {this.props.article.author ? this.props.article.author : 'NA'}</p>
                                <h5><button onClick={() => this.readLater({ 'id': this.props.article.url, 'url': this.props.article.url, 'description': this.props.article.description })} className="btn btn-sm btn-primary">Read Later</button></h5>
                            </div>
                        </div>

                    </div>
                      
                        </Col>

                    </Row>


                </Container>
            </div>
        )
    }
}
