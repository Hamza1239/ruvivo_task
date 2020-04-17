import React from 'react';
import { Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class RecordedLine extends React.Component {
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
            <Row style={{marginLeft:55}}>
            <Col md={12}> 
                <h1 className="snippet-text">
                    Snippet 00:23 min
                </h1>
            </Col>
        </Row>
		)
	}
}

export default RecordedLine;	
