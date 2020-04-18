import React from 'react';
import { Row, Col} from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row className="header-background">
        <div className="back-button-div pointer" > 
            <FeatherIcon icon="arrow-left" size="22" color="#ffffff" style={{marginTop:4, marginLeft:5}} /> 
            <p style={{marginLeft:7, paddingTop:6}} className="back-text">Back</p>
        </div>
        
        <div className='name-div'> 
          <p className='user-name'>Jerome Murphy</p>
        </div>
        
        <div className="time-div">
          <p className="time-text">4:14 mins</p>
          <p className="time-text">Sep 10, 2020</p>
        </div>
        <div style={{display:'flex', flexDirection:'row' ,position:'absolute', right:20}}> 
          <div className="score-div">
            <p className="time-text">Average Score</p>
          </div>
          <div className="points-div pointer">
            <p className="points-text">8.4</p>
          </div>
          <div className="caller-id-div pointer">
            <FeatherIcon icon="copy" size="18" color="white" style={{marginTop:6}} /> 
            <p className="caller-id-text">Copy Call ID</p>
          </div>
          <div className="prev-fwd-div pointer">
            <FeatherIcon icon="chevron-left" size="18" color="white"  /> 
          </div>
          <div className="prev-fwd-div pointer">
            <FeatherIcon icon="chevron-right" size="18" color="white"  /> 
          </div>
        </div>
      </Row>
    )
  }
}

export default Header;