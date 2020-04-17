import React from 'react';
import { Row, Col} from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row style={{borderBottom:'3px solid #f3f4f7', height:60}}>
        <Col md={2} style={{paddingLeft:40}}>
          <Row style={{paddingTop:8, marginLeft:10, width:90+'%', borderRight:'3px solid #f3f4f7', cursor:'pointer'}} > 
              <FeatherIcon icon="arrow-left" size="22" color="#a1a9b3" style={{marginTop:7}} /> 
            <p style={{marginLeft:10, paddingTop:5, color:'a1a9b3'}}>Back</p>
          </Row>
        </Col>
        <Col md={3} style={{paddingLeft:40}}>
          <div style={{marginTop:10, marginLeft:-28, borderRight:'3px solid #f3f4f7'}}> 
            <p style={{color:'#332a7c', fontWeight:'bold', fontSize:24, fontFamily:'F37Ginger'}}>Jerome Murphy</p>
            
          </div>
        </Col>
        
        <Col md={5} style={{paddingTop:10, marginLeft:-7}}>
          <p style={{fontSize:12, fontFamily:'F37Ginger', color:'#11263c',fontWeight:'bold', margin:0, padding:0}}>4:14 mins</p>
          <p style={{fontSize:12, fontFamily:'F37Ginger', color:'#11263c',fontWeight:'bold', margin:0, padding:0}}>Sep 10, 2020</p>
        </Col>
        <Col md={1} style={{paddingLeft:40, marginTop:15}}>
          
          <Row style={{cursor:'pointer', width:120, height:30,paddingLeft:12, backgroundColor:'#11263c', boxShadow:'0 3px 6px 0 rgba(161, 169, 179, 0.3)', borderRadius:5}}>
          <FeatherIcon icon="copy" size="18" color="white" style={{marginTop:6}} /> 
            <p style={{paddingLeft:10, paddingTop:3, fontSize:11, fontFamily:'F37Ginger',lineHeight:2.3, color:"#ffffff"}}>Copy Call ID</p>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default Header;