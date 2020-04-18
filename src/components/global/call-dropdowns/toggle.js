import React from 'react';
import { Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

class ToggleRightSideBar extends React.Component {
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
                    <h1 className="long-text-rightbar">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. This text was..
                    </h1>
                </Col>
                <Col md={2}>
                    {this.props.card.is_like == true?
                    <>
                        <div className="place-element pointer">
                            <div className="like-div"> 
                                <FeatherIcon icon="thumbs-up" size="12" color="#ffffff"/>
                            </div>
                        </div>
                        <div className='place-eye pointer'>   
                            <FeatherIcon icon="eye" size="16" color="#11263c"/>     
                        </div>
                    </>
                    : this.props.card.is_dislike?
                    <>
                        <div className="place-element pointer">
                            <div className="dislike-div"> 
                                <FeatherIcon icon="thumbs-down" size="12" color="#ffffff"/>
                            </div>
                        </div>
                        <div className='place-eye pointer'>   
                            <FeatherIcon icon="eye" size="16" color="#11263c"/>     
                        </div>
                    </>
                    :
                    <>
                        <div style={{paddingTop:8, marginTop:14}} className="pointer">
                            <FeatherIcon icon="thumbs-up" size="12" color="#a1a9b3"/>
                        </div>
                        <div style={{paddingTop:3, marginTop:8}} className="pointer">
                            <FeatherIcon icon="thumbs-down" size="12" color="#a1a9b3"/> 
                        </div>
                        <div style={{paddingTop:3, marginTop:8}} className="pointer">   
                            <FeatherIcon icon="help-circle" size="12" color="#a1a9b3"/>     
                        </div>
                    </>
                    }


                </Col>
            </Row>
		)
	}
}

export default ToggleRightSideBar;	
