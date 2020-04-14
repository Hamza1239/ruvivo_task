import React from 'react';
import { Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

class RightSideBar extends React.Component {
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
            <Row style={{marginLeft:0, borderTop: '1px solid #b9b9b9', width:100+'%'}}> 
                <Col md={10} style={{ paddingLeft: 14, paddingRight: 14, paddingTop: 20, paddingBottom:10}}>
                    <h1 style={{fontSize:11, fontFamily: 'F37Ginger', color:'#11263c', fontWeight:'normal', fontStretch:'normal', fontStyle:'normal'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. This text was..
                    </h1>
                </Col>
                <Col md={2}>
                    <div style={{paddingTop:8, marginTop:7}}>
                        <FeatherIcon icon="thumbs-up" size="12" color="#a1a9b3"/>
                    </div>
                    <div style={{paddingTop:3, marginTop:7}}>
                        <FeatherIcon icon="thumbs-down" size="12" color="#a1a9b3"/> 
                    </div>
                    <div style={{paddingTop:3, marginTop:7}}>   
                        <FeatherIcon icon="help-circle" size="12" color="#a1a9b3"/>     
                    </div>
                </Col>
            </Row>
		)
	}
}

export default RightSideBar;	
