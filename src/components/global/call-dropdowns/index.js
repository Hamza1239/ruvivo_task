import React from 'react';
import { Row, Col, DropdownButton, MenuItem, Dropdown,} from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import RightSideBar from './toggle'; 
import ScoreCard from './scorecard';
import Button from '../button';

class RightBar extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      is_department_tab: false, 
      is_call_type_tab:false, 
      is_call_status_tab: false,

      cards:[
        {is_like:true, is_dislike: false},
        {is_like:false, is_dislike: true},
        {is_like:false, is_dislike: false}
      ],

      department:[
        {
          name: 'Sales'
        },
        {
          name: 'Technical'
        },
        {
          name: 'Admin'
        },
      ],

      call_type:[
        {
          name: 'Incoming'
        },
        {
          name: 'Outgoing'
        },
        {
          name: 'Disconnected'
        },
      ],

      call_status:[
        {
          name: 'In Call'
        },
        {
          name: 'Connected'
        },
        {
          name: 'Disconnected'
        },
      ],

    }
    this.toggleCallTypeTab = this.toggleCallTypeTab.bind(this);
		this.toggleCallStatusTab = this.toggleCallStatusTab.bind(this);
		this.toggleDepartmentTab = this.toggleDepartmentTab.bind(this);
  }

  toggleCallStatusTab() {
    this.setState({
      is_call_status_tab: !this.state.is_call_status_tab
    })
  }

  toggleCallTypeTab() {
  this.setState({
    is_call_type_tab: !this.state.is_call_type_tab
  })
  }

  toggleDepartmentTab() {
    this.setState({
      is_department_tab: !this.state.is_department_tab
    })
  }

  render() {
    return (
      <Row style={{backgroundColor:'#f3f4f7', height:60}}> 
        <div style={{marginLeft:20, width:25+'%', height:30, display:'flex', justifyContent:'center', marginTop:15}}>
          <div style={{ boxShadow: '0 10px 20px 0 rgba(161, 169, 179, 0.25)', backgroundColor:'white', width:90+'%', borderRadius:5}}>
              <Row onClick={this.toggleDepartmentTab} style={{cursor:'pointer', position:'relative'}}> 
                <div style={{paddingLeft:30, paddingTop:5}}> 
                  <h1 style={{fontSize:16, fontFamily: 'F37Ginger', color:'#11263c', fontWeight:'normal'}}> 
                    Select Department
                  </h1>
                </div>
                <div style={{position:'absolute', right:35, top:3}}> 
                  {this.state.is_department_tab?
                  <FeatherIcon icon="chevron-up" size="24" color="#11263c"/>
                  :
                  <FeatherIcon icon="chevron-down" size="24" color="#11263c"/>
                  }
                </div>
                {this.state.is_department_tab?
                <div style={{marginTop: -5 , marginLeft:15, marginRight:15, backgroundColor:'white', borderRadius:5, width:100+'%', paddingBottom:3, zIndex:10}}>
                    {this.state.department.map(function (card, i) {
                      return (
                        <ScoreCard card={card} current_index={i}/>
                      )
                    })}
                </div>
                : null}
              </Row>
              
            </div>
        </div>
        <div style={{marginLeft:20, width:25+'%', height:30, display:'flex', justifyContent:'center', marginTop:15}}>
          <div style={{ boxShadow: '0 10px 20px 0 rgba(161, 169, 179, 0.25)', backgroundColor:'white', width:90+'%', borderRadius:5}}>
              <Row onClick={this.toggleCallTypeTab} style={{cursor:'pointer', position:'relative'}}> 
                <div style={{paddingLeft:30, paddingTop:5}}> 
                  <h1 style={{fontSize:16, fontFamily: 'F37Ginger', color:'#11263c', fontWeight:'normal'}}> 
                    Select Call Type
                  </h1>
                </div>
                <div style={{position:'absolute', right:35, top:3}}> 
                  {this.state.is_call_type_tab?
                  <FeatherIcon icon="chevron-up" size="24" color="#11263c"/>
                  :
                  <FeatherIcon icon="chevron-down" size="24" color="#11263c"/>
                  }
                </div>
                {this.state.is_call_type_tab?
                <div style={{marginTop: -5 , width:100+'%', marginLeft:15, marginRight:15, backgroundColor:'white', borderRadius:5, paddingBottom:3, zIndex:10}}>
                    {this.state.call_type.map(function (card, i) {
                      return (
                        <ScoreCard card={card} current_index={i}/>
                      )
                    })}
                </div>
                : null}
              </Row>
              
            </div>
        </div>


        <div style={{marginLeft:20, width:25+'%', height:30, display:'flex', justifyContent:'center', marginTop:15, marginRight:20}}>
          <div style={{ boxShadow: '0 10px 20px 0 rgba(161, 169, 179, 0.25)', backgroundColor:'white', width:90+'%', borderRadius:5}}>
              <Row onClick={this.toggleCallStatusTab} style={{cursor:'pointer', position:'relative'}}> 
                <div style={{paddingLeft:30, paddingTop:5}}> 
                  <h1 style={{fontSize:16, fontFamily: 'F37Ginger', color:'#11263c', fontWeight:'normal'}}> 
                    Select Call Status
                  </h1>
                </div>
                <div style={{position:'absolute', right:35, top:3}}> 
                  {this.state.is_call_status_tab?
                  <FeatherIcon icon="chevron-up" size="24" color="#11263c"/>
                  :
                  <FeatherIcon icon="chevron-down" size="24" color="#11263c"/>
                  }
                </div>
                {this.state.is_call_status_tab?
                <div style={{marginTop: -5 , width:100+'%', marginLeft:15, marginRight:15, backgroundColor:'white', borderRadius:5, paddingBottom:3, zIndex:10}}>
                    {this.state.call_status.map(function (card, i) {
                      return (
                        <ScoreCard card={card} current_index={i}/>
                      )
                    })}
                </div>
                : null}
              </Row>
              
            </div>
          </div>
          <div style={{position:'absolute', right:20}} className="pointer"> 
            <Button style={{boxShadow:'0 5px 10px 0 rgba(17, 38, 60, 0.25)', marginTop:15, backgroundColor: "#11263c", height: 30, width: 130, borderRadius:5, textAlign: 'center', paddingTop: 5, color: '#ffffff', fontSize: 15, fontFamily: 'F37Ginger', fontWeight: 'normal'}} text='Submit'/>
          </div>
        </Row>
    )
  }
}

export default RightBar;