import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import CallOpening2 from './open_call_2';
import RecordedLine from './recorded';
import {Link} from 'react-router-dom';
import Button from '../global/button';
import BackdropFilter from "react-backdrop-filter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FeatherIcon from 'feather-icons-react';
import Header from '../global/header';
import MediaPlayer from '../global/player';
import RightBar from '../global/rightbar';
import CallDropDowns from '../global/call-dropdowns';
//import '../../index.css';

 
class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state={
		is_opening_tab: true, is_closing_tab:false, is_more_tab: false, all:true, found:false, not_found:false,
		cards:[{is_like:true, is_dislike: false},{is_like:false, is_dislike: false},{is_like:false, is_dislike: false},{is_like:false, is_dislike: false}],
		//call_opening1: [recorded_line:[{}]]
		call_opening2:[{found:false}, {found:false}, {found:false}, {found:false}],
		first_call:true, second_call: true, third_call:true, recorded_line:true, greeting:false
		}
		
		this.handleAllClick = this.handleAllClick.bind(this);
		this.handleFoundClick = this.handleFoundClick.bind(this);
		this.handleNotFoundClick = this.handleNotFoundClick.bind(this);
	  }
		handleAllClick(){
			this.setState({
				all: true,
				found: false,
				not_found: false
			})
		}

		handleFoundClick(){
			this.setState({
				all: false,
				found: true,
				not_found: false
			})
		}

		handleNotFoundClick(){
			this.setState({
				all: false,
				found: false,
				not_found: true
			})
		}


		handleToggleCallOpening(call){
			if(call==1){
				this.setState({
					first_call: !this.state.first_call
				})
			} else if (call == 2){
				this.setState({
					second_call: !this.state.second_call
				})
			} else if (call == 3){
				this.setState({
					third_call: !this.state.third_call
				})
			}
		}

		handleRecordedLine(){
			this.setState({
				recorded_line: !this.state.recorded_line
			})
		}

		handleGreeting(){
			this.setState({
				greeting: !this.state.greeting
			})
		}
	

    render () {
        return (
			<Row>
				<Col md={9}>  
					<Header />
					<CallDropDowns />
					<MediaPlayer />
					<Row>
						<Col md={3} className="zero-right">
							<div className="moment-div">
								<p className="moment-text">Moments</p>
								<div className="all-button-row">
									{this.state.all?
										<Button style={{ backgroundColor: "#332a7c", height: 18, width: 30, borderBottomLeftRadius: 5, borderTopLeftRadius:5, textAlign: 'center', paddingTop: 2, color: '#ffffff', fontSize: 10, fontFamily: 'F37Ginger', fontWeight: 'normal'}} text={'All'}/>
										:
										<a onClick={()=>this.handleAllClick()}  style={{cursor:'pointer'}}>
											<Button style={{  backgroundColor: "#f3f4f7", height: 18, width: 30, borderBottomLeftRadius: 5, borderTopLeftRadius:5, textAlign: 'center', paddingTop: 2, color: '#332a7c', fontSize: 10, fontFamily: 'F37Ginger', fontWeight: 'normal'}} text={'All'}/>
										</a>
									}
									<div style={{marginLeft:0}}> 
									{this.state.found?
										<Button style={{ backgroundColor: "#332a7c", height: 18, width: 35,  textAlign: 'center', paddingTop: 2, color: '#ffffff', fontSize: 10, fontFamily: 'F37Ginger', fontWeight: 'normal'}} text={'Found'}/>
										:
										<a onClick={()=>this.handleFoundClick()}  style={{cursor:'pointer'}}>
											<Button style={{  backgroundColor: "#f3f4f7", height: 18, width: 35, textAlign: 'center', paddingTop: 2, color: '#332a7c', fontSize: 10, fontFamily: 'F37Ginger', fontWeight: 'normal'}} text={'Found'}/>
										</a>
									}
									</div>
									<div style={{marginLeft:0}}> 
									{this.state.not_found?
										<Button style={{ backgroundColor: "#332a7c", height: 18, width: 50, borderBottomRightRadius: 5, borderTopRightRadius: 5, textAlign: 'center', paddingTop: 2, color: '#ffffff', fontSize: 10, fontFamily: 'F37Ginger', fontWeight: 'normal'}} text={'Not Found'}/>
										:
										<a onClick={()=>this.handleNotFoundClick()} style={{cursor:'pointer'}}>
											<Button style={{  backgroundColor: "#f3f4f7", height: 18, width: 50, borderBottomRightRadius: 5,  borderTopRightRadius: 5,  textAlign: 'center', paddingTop: 2, color: '#332a7c', fontSize: 10, fontFamily: 'F37Ginger', fontWeight: 'normal'}} text={'Not Found'}/>
										</a>
									}
									</div>
								</div>
							</div>
							

							{this.state.all?
							<div>
							<a onClick={()=> this.handleToggleCallOpening(1)} style={{cursor:'pointer'}}> 
								<Row className="margin-15"> 
								{this.state.first_call?
									<FeatherIcon icon="chevron-up" size="18" color="#11263c"/>
									:
									<FeatherIcon icon="chevron-down" size="18" color='#11263c' />
								}
									<h1 className="call-opening-text">
										Call Opening
									</h1>
								</Row>
							</a>
							{this.state.first_call?
								<>
									<a onClick={()=> this.handleRecordedLine()} style={{cursor:'pointer'}}> 
										<Row className="margin-25-10"> 
											{this.state.recorded_line?
												<FeatherIcon icon="chevron-up" size="18" color="#11263c"/>
												:
												<FeatherIcon icon="chevron-down" size="18" color='#11263c' />
											}
											<h1 className="call-opening-text">
												Recorded Line
											</h1>
											<h1 className="found-text">
												Found
											</h1>
										</Row>
									</a>
									{this.state.recorded_line?
										<div style={{marginTop: 5 }}>
												{this.state.cards.map(function (card, i) {
													return (
														<RecordedLine card={card}/>
													)
												})}
										</div>
									: null}

									<a onClick={()=> this.handleGreeting()} className="pointer"> 
										<Row className="margin-25-10"> 
											{this.state.greeting?
												<FeatherIcon icon="chevron-up" size="18" color="#11263c"/>
												:
												<FeatherIcon icon="chevron-down" size="18" color='#11263c' />
											}
											<h1 className="call-opening-text">
												Meaningful Greeting
											</h1>
											<h1 className="found-text">
												Found
											</h1>
										</Row>
									</a>
									{this.state.greeting?
										<div style={{marginTop: 5 }}>
												{this.state.cards.map(function (card, i) {
													return (
														<RecordedLine card={card}/>
													)
												})}
										</div>
									: null}

									<div>
										<Row style={{marginTop:7}}> 
											<h1 className="may-text">
												May | Speak with
											</h1>
											<h1 className="not-found-text">
												Not Found
											</h1>
										</Row>
									</div>
								</>
							: null}
							<a onClick={()=> this.handleToggleCallOpening(2)} className="pointer"> 
								<Row style={{marginLeft:15, marginTop:15}}> 
								{this.state.second_call?
									<FeatherIcon icon="chevron-up" size="18" color="#11263c"/>
									:
									<FeatherIcon icon="chevron-down" size="18" color="#11263c"/>
								}
									<h1 className="call-opening-text">
										Call Opening
									</h1>
								</Row>
							</a>
							
							{this.state.second_call?
								<div style={{marginTop: 5 }}>
										{this.state.call_opening2.map(function (card, i) {
											return (
												<CallOpening2 card={card}/>
											)
										})}
								</div>
								: null}
							<a onClick={()=> this.handleToggleCallOpening(3)} className="pointer"> 
								<Row className="margin-15"> 
									{this.state.third_call?
										<FeatherIcon icon="chevron-up" size="18" color="#11263c"/>
										:
										<FeatherIcon icon="chevron-down" size="18" color="#11263c"/>
									}
										<h1 className="call-opening-text">
											Call Opening
										</h1>
								</Row>
							</a>
							
							{this.state.third_call?
								<div style={{marginTop: 5 }}>
										{this.state.call_opening2.map(function (card, i) {
											return (
												<CallOpening2 card={card}/>
											)
										})}
								</div>
							: null}

							</div>
							: null }

							{this.state.found?
							<div>
								<a onClick={()=> this.handleToggleCallOpening(1)} className="pointer"> 
									<Row className="margin-15"> 
									{this.state.first_call?
										<FeatherIcon icon="chevron-up" size="18" color="#11263c"/>
										:
										<FeatherIcon icon="chevron-down" size="18" color="#11263c"/>
									}
										<h1 className="call-opening-text">
											Call Opening
										</h1>
									</Row>
								</a>
								{this.state.first_call?
									<>
										<a onClick={()=> this.handleRecordedLine()} className="pointer"> 
											<Row style={{marginLeft:25, marginTop:10}}> 
												{this.state.recorded_line?
													<FeatherIcon icon="chevron-up" size="18" color="#11263c"/>
													:
													<FeatherIcon icon="chevron-down" size="18" color="#11263c"/>
												}
												<h1 className="call-opening-text">
													Recorded Line
												</h1>
												<h1 className="found-text">
													Found
												</h1>
											</Row>
										</a>
										{this.state.recorded_line?
											<div style={{marginTop: 5 }}>
													{this.state.cards.map(function (card, i) {
														return (
															<RecordedLine card={card}/>
														)
													})}
											</div>
										: null}

										<a onClick={()=> this.handleGreeting()} style={{cursor:'pointer'}}> 
											<Row className="margin-25-10"> 
												{this.state.greeting?
													<FeatherIcon icon="chevron-up" size="18" color="#11263c"/>
													:
													<FeatherIcon icon="chevron-down" size="18" color="#11263c"/>
												}
												<h1 className="call-opening-text">
													Meaningful Greeting
												</h1>
												<h1 className="found-text">
													Found
												</h1>
											</Row>
										</a>
										{this.state.greeting?
											<div style={{marginTop: 5 }}>
													{this.state.cards.map(function (card, i) {
														return (
															<RecordedLine card={card}/>
														)
													})}
											</div>
										: null}

										{/* <div>
											<Row style={{marginTop:7}}> 
												<h1 style={{marginLeft:75, fontFamily:'#F37Ginger', fontSize:12, color:'#a1a9b3'}}>
													May | Speak with
												</h1>
												<h1 style={{position:'absolute', right:20, fontWeight:'normal', fontSize:12, fontFamily:'F37Ginger', color:'#a1a9b3'}}>
													Not Found
												</h1>
											</Row>
										</div> */}
									</>
								: null}
							</div>
							: null}

							
							{this.state.not_found?
							<div>
								<a onClick={()=> this.handleToggleCallOpening(1)} className="pointer"> 
									<Row className="margin-15"> 
									{this.state.first_call?
										<FeatherIcon icon="chevron-up" size="18" color="#11263c"/>
										:
										<FeatherIcon icon="chevron-down" size="18" color="#11263c"/>
									}
										<h1 className="call-opening-text">
											Call Opening
										</h1>
									</Row>
								</a>
								<div>
									{this.state.first_call?
									<Row style={{marginTop:7}}> 
										<h1 className="may-text">
											May | Speak with
										</h1>
										<h1 className="not-found-text"> 
											Not Found
										</h1>
									</Row>
									: null }
								</div>
								<a onClick={()=> this.handleToggleCallOpening(2)} className="pointer"> 
									<Row style={{marginLeft:15, marginTop:15}}> 
									{this.state.second_call?
										<FeatherIcon icon="chevron-up" size="18" color="#11263c"/>
										:
										<FeatherIcon icon="chevron-down" size="18" color="#11263c"/>
									}
										<h1 className="call-opening-text">
											Call Opening
										</h1>
									</Row>
								</a>
								
								{this.state.second_call?
									<div style={{marginTop: 5 }}>
											{this.state.call_opening2.map(function (card, i) {
												return (
													<CallOpening2 card={card}/>
												)
											})}
									</div>
									: null}
								<a onClick={()=> this.handleToggleCallOpening(3)} className="pointer"> 
									<Row style={{marginLeft:15, marginTop:15}}> 
										{this.state.third_call?
											<FeatherIcon icon="chevron-up" size="18" color="#11263c"/>
											:
											<FeatherIcon icon="chevron-down" size="18" color="#11263c"/>
										}
											<h1 className="call-opening-text">
												Call Opening
											</h1>
									</Row>
								</a>
								
								{this.state.third_call?
									<div style={{marginTop: 5 }}>
											{this.state.call_opening2.map(function (card, i) {
												return (
													<CallOpening2 card={card}/>
												)
											})}
									</div>
								: null}

							</div>
							: null}
						</Col>
						<Col md={9} style={{paddingTop:10}}>
							<div>
								<p className="time-left">
									00:04 min
								</p>
								<div className="search-div pointer">
									<FeatherIcon icon="search" size="18" color="#ffffff" style={{marginTop:0}} /> 
								</div>
							</div>
							<div style={{backgroundColor:'#f3f4f7', width:70+'%', borderRadius:30}}>
								<p className="left-msg-text">
									Hello There. Welcome to Flipkart.com. Some more text here.
								</p>
							</div>
							<div style={{}}>
								<p className="time-right">
									00:04 min
								</p>
							</div>
							<div style={{marginTop:50, marginLeft:30+'%', backgroundColor:'#11263c', width:70+'%', borderRadius:30}}>
								<p style={{paddingLeft:20, paddingRight:20, paddingTop:10, paddingBottom:10, color:'#ffffff', fontSize:14, fontFamily:'F37Ginger', fontWeight:'normal'}}>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
								</p>
							</div>

							<div>
								<p className="time-left">
									00:04 min
								</p>
							</div>
							<div style={{backgroundColor:'#f3f4f7', width:70+'%', borderRadius:30}}>
								<p style={{paddingLeft:20, paddingRight:20, paddingTop:10, paddingBottom:10, fontSize:14, color:'#11263c', fontWeight:'normal', fontFamily:'F37Ginger'}}>
									Hello There. Welcome to Flipkart.com. Some more text here. This text is a bit longer. Which can be seen here!
								</p>
							</div>

							<div>
								<p className="time-right">
									00:04 min
								</p>
							</div>
							 <div style={{position:'relative'}}> 
								<div style={{opacity:1, marginTop:50, marginLeft:30+'%', backgroundColor:'#581845 ', WebkitBackdropFilter:5, backdropFilter:5, width:70+'%', borderRadius:30}}>
										<p style={{opacity:0.02, paddingLeft:20, paddingRight:20, paddingTop:10, paddingBottom:10, color:'#ffffff', fontSize:14, fontFamily:'F37Ginger', fontWeight:'normal'}}>
											Lorem Ipsum is simply dummy text of the printing and typesetting industry. Which is used in many corportations.
										</p>
								</div>
									<div style={{ position:'absolute', width:30, height:30, backgroundColor:'white', display:'flex', justifyContent:'center', alignItems:'center', borderRadius:50+'%',top:15, right:280}}>
										<FeatherIcon icon="play" size="18" color="#11263c" style={{marginTop:0}} /> 
										
									</div>
									<div style={{ position:'absolute', width:30, height:30, backgroundColor:'white', display:'flex', justifyContent:'center', alignItems:'center', borderRadius:50+'%',top:15, right:230}}>
										<FeatherIcon icon="flag" size="18" color="#11263c" style={{marginTop:0}} /> 
									</div>
							</div>

							<div style={{}}>
								<p className="time-left">
									00:04 min
								</p>
							</div>
							<div style={{backgroundColor:'#f3f4f7', width:70+'%', borderRadius:30}}>
								<p style={{paddingLeft:20, paddingRight:20, paddingTop:10, paddingBottom:10, fontSize:14, color:'#11263c', fontWeight:'normal', fontFamily:'F37Ginger'}}>
									Hello There. Welcome to Flipkart.com. Some more text here.
								</p>
							</div>

							<div style={{}}>
								<p className="time-right">
									00:04 min
								</p>
							</div>
							<div style={{marginTop:50, marginLeft:30+'%', backgroundColor:'#581845 ', width:70+'%', borderRadius:30}}>
								<p style={{paddingLeft:20, paddingRight:20, paddingTop:10, paddingBottom:10, color:'#ffffff', fontSize:14, fontFamily:'F37Ginger', fontWeight:'normal'}}>
									Lorem Ipsum is simply dummy text of the printing and typesetting industry.
								</p>
							</div>
						</Col>
					</Row>
				</Col>
				<Col md={3} style={{margin:0,padding:0, backgroundColor:'#f3f4f7', borderLeft:'2px solid #11263c', paddingBottom:80}}>
					<RightBar /> 
				</Col>
			</Row>
        );
    }
}


export default Home;
