import React from 'react';
import { Row, Col} from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <div style={{display:'flex', flexDirection:'row', marginLeft:0, height:57, paddingLeft:30, paddingTop:13, backgroundColor:'#e6e7ee'}}>
        <h1 style={{fontSize:24, fontFamily:'F37Ginger', fontWeight:'bold', fontStretch:'normal', color:'#332a7c'}}>Evaluation Form</h1>
        <div style={{position:'absolute', right:10}}> 
          <FeatherIcon icon="external-link" size="20" color="#a1a9b3" style={{marginLeft:10, marginTop:3}}/>
          {/* <img style={{marginLeft:10, width: 16, height: 16, marginTop:7 }} src={"https://s3-ap-southeast-1.amazonaws.com/storage.elearning.com/ruvivo/external.png"} />
            */}
          <FeatherIcon icon="x" size="24" color="#a1a9b3" style={{marginLeft:10, marginTop:3}}/>
        </div>
      </div>
      <div style={{display:'flex', justifyContent:'center', paddingTop:25}}>
        <div style={{ boxShadow: '0 10px 20px 0 rgba(161, 169, 179, 0.25)', backgroundColor:'white', width:90+'%', borderRadius:10}}>
          <Row onClick={this.toggleOpeningTab} style={{cursor:'pointer', position:'relative'}}> 
            <div style={{paddingLeft:30, paddingTop:8}}> 
              <h1 style={{fontSize:16, fontFamily: 'F37Ginger', color:'#11263c', fontWeight:'normal'}}> 
                Opening
              </h1>
            </div>
            <div style={{position:'absolute', right:35, top:8}}> 
              {this.state.is_opening_tab?
                <FeatherIcon icon="chevron-up" size="18" color="#11263c"/>
                :
                <FeatherIcon icon="chevron-down" size="18" color="#11263c"/>
                }
            </div>
          </Row>
          {this.state.is_opening_tab?
          <div style={{marginTop: 5 }}>
              {this.state.cards.map(function (card, i) {
                return (
                  <RightSideBar card={card}/>
                )
              })}
          </div>
          : null}
        </div>
      </div>	


      <div style={{display:'flex', justifyContent:'center', marginTop:25}}>
      <div style={{ boxShadow: '0 10px 20px 0 rgba(161, 169, 179, 0.25)', backgroundColor:'white', width:90+'%', borderRadius:10}}>
          <Row onClick={this.toggleClosingTab} style={{cursor:'pointer', position:'relative'}}> 
            <div style={{paddingLeft:30, paddingTop:8}}> 
              <h1 style={{fontSize:16, fontFamily: 'F37Ginger', color:'#11263c', fontWeight:'normal'}}> 
                Closing
              </h1>
            </div>
            <div style={{position:'absolute', right:35, top:5}}> 
              {this.state.is_closing_tab?
              <FeatherIcon icon="chevron-up" size="18" color="#11263c"/>
              :
              <FeatherIcon icon="chevron-down" size="18" color="#11263c"/>
              }
            </div>
          </Row>
          {this.state.is_closing_tab?
          <div style={{marginTop: 5 }}>
              {this.state.cards.map(function (card, i) {
                return (
                  <RightSideBar card={card} />
                )
              })}
          </div>
          : null}
        </div>
      </div>		


      <div style={{display:'flex', justifyContent:'center', marginTop:25}}>
      <div style={{ boxShadow: '0 10px 20px 0 rgba(161, 169, 179, 0.25)', backgroundColor:'white', width:90+'%', borderRadius:10}}>
          <Row onClick={this.toggleMoreTab} style={{cursor:'pointer', position:'relative'}}> 
          <div style={{paddingLeft:30, paddingTop:8}}> 
              <h1 style={{fontSize:16, fontFamily: 'F37Ginger', color:'#11263c', fontWeight:'normal'}}> 
                Something More
              </h1>
            </div>
            <div style={{position:'absolute', right:35, top:5}}> 
              {this.state.is_more_tab?
              <FeatherIcon icon="chevron-up" size="18" color="#11263c"/>
              :
              <FeatherIcon icon="chevron-down" size="18" color="#11263c"/>
              }
            </div>
          </Row>
          {this.state.is_more_tab?
          <div style={{marginTop: 5 }}>
              {this.state.cards.map(function (card, i) {
                return (
                  <RightSideBar card={card} />
                )
              })}
          </div>
          : null}
        </div>
      </div>	

      <div style={{position:'absolute', marginTop:20, width:100+'%', bottom:0, marginTop:20}}> 
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', position:'relative', backgroundColor:'#332a7c', cursor:'pointer', height:60,  width:100+'%', bottom:0}}>
          <h1 style={{fontSize:24, fontWeight:'normal', fontFamily:'F37Ginger', lineHeight:1.21, color:'white'}}> 
            Submit
          </h1>
        </div>	
      </div>
      </>
    )
  }
}

export default Header;