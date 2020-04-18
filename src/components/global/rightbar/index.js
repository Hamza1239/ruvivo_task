import React from 'react';
import { Row, Col, DropdownButton, MenuItem, Dropdown,} from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import RightSideBar from './toggle'; 
import ScoreCard from './scorecard';

class RightBar extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      is_opening_tab: true, 
      is_closing_tab:false, 
      is_more_tab: false,
      cards:[
        {is_like:true, is_dislike: false},
        {is_like:false, is_dislike: true},
        {is_like:false, is_dislike: false},
        {is_like:false, is_dislike: false}
      ],
    }
    this.toggleOpeningTab = this.toggleOpeningTab.bind(this);
		this.toggleClosingTab = this.toggleClosingTab.bind(this);
		this.toggleMoreTab = this.toggleMoreTab.bind(this);
  }

  toggleOpeningTab() {
    this.setState({
      is_opening_tab: !this.state.is_opening_tab
    })
  }

  toggleClosingTab() {
  this.setState({
    is_closing_tab: !this.state.is_closing_tab
  })
  }

  toggleMoreTab() {
    this.setState({
      is_more_tab: !this.state.is_more_tab
    })
  }

  render() {
    return (
      <>
      <div style={{}}className="right-bar-header">
        <h1 className="form-text">Evaluation Form</h1>
        <div style={{position:'absolute', right:10}}> 
          <FeatherIcon icon="external-link" size="20" color="#a1a9b3" style={{marginLeft:10, marginTop:2}}/>
          <FeatherIcon icon="x" size="24" color="#a1a9b3" style={{marginLeft:10, marginTop:2}}/>
        </div>
      </div>

      <div style={{display:'flex', justifyContent:'center', marginTop:25}}>
        <div style={{ boxShadow: '0 10px 20px 0 rgba(161, 169, 179, 0.25)', backgroundColor:'white', width:90+'%', borderRadius:10}}>
            <Row onClick={this.toggleMoreTab} style={{cursor:'pointer', position:'relative'}}> 
              <div style={{paddingLeft:30, paddingTop:8}}> 
                <h1 style={{fontSize:16, fontFamily: 'F37Ginger', color:'#11263c', fontWeight:'normal'}}> 
                  Select Scorecard
                </h1>
              </div>
              <div style={{position:'absolute', right:35, top:5}}> 
                {this.state.is_more_tab?
                <FeatherIcon icon="chevron-up" size="24" color="#11263c"/>
                :
                <FeatherIcon icon="chevron-down" size="24" color="#11263c"/>
                }
              </div>
            </Row>
            {this.state.is_more_tab?
            <div style={{marginTop: 5 , marginBottom:3}}>
                {this.state.cards.map(function (card, i) {
                  return (
                    <ScoreCard card={card} current_index={i}/>
                  )
                })}
            </div>
            : null}
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
                <FeatherIcon icon="chevron-up" size="24" color="#11263c"/>
                :
                <FeatherIcon icon="chevron-down" size="24" color="#11263c"/>
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
              <FeatherIcon icon="chevron-up" size="24" color="#11263c"/>
              :
              <FeatherIcon icon="chevron-down" size="24" color="#11263c"/>
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
      </>
    )
  }
}

export default RightBar;