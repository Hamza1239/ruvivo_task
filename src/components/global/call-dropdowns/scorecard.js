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
            <div style={{display:'flex', flexDirection:'row', marginLeft:15, marginRight:15, backgroundColor:'#ffffff'}}>
                <Col md={12}> 
                    <hr style={{color:'#11263c', marginTop:3, marginBottom:9, marginRight:15}}/>
                    <h1 className="snippet-text pointer">
                        {this.props.card.name}
                    </h1>
                    
                </Col>
            </div>
		)
	}
}

export default RecordedLine;	
