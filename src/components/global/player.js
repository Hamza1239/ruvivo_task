import React from 'react';
import { Row, Col} from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row style={{height:170, borderBottom:'3px solid #f3f4f7', paddingTop:10}}>
        <Col md={2}>
          <div style={{backgroundColor:'#332a7c', boxShadow:'0 1px 3px 0 rgba(51, 42, 124, 0.3)', cursor:'pointer', height:70, width:70, marginTop:30, marginLeft:30, borderRadius:50+'%'}}>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', paddingTop:13}}> 
              <FeatherIcon icon="play" size="30" color="white" style={{marginTop:7}} /> 
            </div>
          </div>
          <div style={{paddingLeft:28, paddingTop:20}}>
            <p style={{fontSize:14, color:'#a1a9b3', fontFamily:'F37Ginger', fontWeight:'bold'}}>00:33 / 04:14</p>
          </div>
        </Col>
        <Col md={10}>
          <div style={{display:'flex', justifyContent:'center',marginBottom:0,paddingBottom:0, marginTop:5, marginLeft:40}}>
          
            <p style={{padding:0, margin:0, color:'#a1a9b3', fontSize:10,fontFamily:'F37Ginger'}}>
              AGENT
            </p>
          </div>
          <Row style={{width:100+'%', marginTop:0, paddingTop:0, height:90}}>
            <div style={{width:188, height:90, position:'relative', backgroundColor:'rgba(17, 38, 60, 0.05)',paddingTop:20}}>
              
              <div style={{ width:140,height:20, backgroundColor:'#8bf087'}}>
                  
              </div>
              <div style={{width:797,height:10, zIndex:-10, backgroundColor:'#f3f4f7'}}>

              </div>
              <div style={{marginLeft:160, width:47,height:20, backgroundColor:'#f25767'}}>

              </div>
              <div style={{position:'absolute', border:'3px solid #11263c', width:5, height:90, right:0, top:0}}>

              </div>
              
            </div>
            <div style={{paddingTop:20}}>	
              <Row> 
                <div style={{ marginLeft:42, width:23, height:20, backgroundColor:'#8bf087'}}>

                </div>
                <div style={{ marginLeft:57, width:182, height:20, backgroundColor:'#8bf087'}}>

                </div>
                <div style={{ marginLeft:28, width:132, height:20, backgroundColor:'#8bf087'}}>

                </div>
              </Row>
              <Row style={{marginTop:10}}>
                <div style={{marginLeft:65, width:192,height:20, backgroundColor:'#f25767'}}>

                </div>
                <div style={{marginLeft:47, width:28,height:20, backgroundColor:'#f25767'}}>

                </div>
                <div style={{marginLeft:102, width:80,height:20, backgroundColor:'#f25767'}}>

                </div>
              </Row>
            </div>
          </Row>
          <div style={{display:'flex', justifyContent:'center',marginTop:0,paddingTop:0, marginBottom:5, marginLeft:40}}>
            <p style={{padding:0, margin:0, color:'#a1a9b3', fontSize:10,fontFamily:'F37Ginger'}}>
              CUSTOMER
            </p>
          </div>
          <div style={{position:'absolute', right:70, bottom:1}}>
            <Row> 
              <p style={{color:'#a1a9b3', fontSize:14,fontFamily:'F37Ginger', marginRight:5}}>
                1x
              </p>
              <FeatherIcon icon="chevron-up" size="18" color="#a1a9b3"/>
            </Row>
          </div>
        </Col>
      </Row>
    )
  }
}

export default Header;