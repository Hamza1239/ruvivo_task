import React from 'react';
import { Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class RecordedLine extends React.Component {
	constructor(props) {
        super(props);
        this.state={is_like:false, is_dislike:false}
    }


    


	render() {
		return (
            <Row style={{marginLeft:0, paddingLeft:0}}>
            <Col md={12}> 
                <hr style={{color:'#11263c', marginTop:3, marginBottom:9, marginRight:15}}/>
                <h1 className="snippet-text pointer">
                    Demo Scorecard {this.props.current_index+1}
                </h1>
                
            </Col>
        </Row>
		)
	}
}

export default RecordedLine;	
