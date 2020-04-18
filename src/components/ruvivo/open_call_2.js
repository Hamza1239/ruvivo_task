import React from 'react';
import { Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class CallOpening2 extends React.Component {
	constructor(props) {
        super(props);
        this.state={is_like:false, is_dislike:false}
        this.setLikeTrue = this.setLikeTrue.bind(this);
        this.setDislikeTrue = this.setDislikeTrue.bind(this);
    }


    setLikeTrue(){
        this.setState({
            is_like:true,
            is_dislike:false
        })
    }

    setDislikeTrue(){
        this.setState({
            is_like:false,
            is_dislike:true
        })
    }


	render() {
		return (
            <Row style={{marginLeft:20}}>
            <Col md={6}> 
                <h1 className="spouse-text">
                    Spouse State
                </h1>
            </Col>
            <Col md={6}> 
                <h1 className="not-found-text" style={{marginRight:15}}>
                    Not Found
                </h1>
            </Col>
        </Row>
		)
	}
}

export default CallOpening2;	
