import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import RightSideBar from './Component';
import CallOpening2 from './open_call_2';
import RecordedLine from './recorded';
import {Link} from 'react-router-dom';
import Button from '../global/button';
import BackdropFilter from "react-backdrop-filter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FeatherIcon from 'feather-icons-react';
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
		this.toggleOpeningTab = this.toggleOpeningTab.bind(this);
		this.toggleClosingTab = this.toggleClosingTab.bind(this);
		this.toggleMoreTab = this.toggleMoreTab.bind(this);
		this.handleAllClick = this.handleAllClick.bind(this);
		this.handleFoundClick = this.handleFoundClick.bind(this);
		this.handleNotFoundClick = this.handleNotFoundClick.bind(this);
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
				<Col md={9} classname='whole'>  
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
					<Row>
						<Col md={3} style={{marginRight:0, paddingRight:0}}>
							<div style={{paddingTop:14,paddingLeft:20, backgroundColor:'#f3f4f7', height:60, width:100+'%'}}>
								<h1 style={{fontSize:20, fontFamily:'F37Ginger', fontWeight:'bold', color:'#332a7c'}}>Moments</h1>
							</div>
							<Row style={{display:'flex', justifyContent:'center', paddingLeft:5, paddingTop:20, paddingRight:10}}>
								{this.state.all?
									<Button style={{ backgroundColor: "#332a7c", height: 23, width: 44, borderRadius: 5, textAlign: 'center', paddingTop: 3, color: '#ffffff', fontSize: 10, fontFamily: 'F37Ginger', fontWeight: 'normal'}} text={'All'}/>
									:
									<a onClick={()=>this.handleAllClick()}  style={{cursor:'pointer'}}>
										<Button style={{  backgroundColor: "#f3f4f7", height: 23, width: 44, borderRadius: 5, textAlign: 'center', paddingTop: 3, color: '#332a7c', fontSize: 10, fontFamily: 'F37Ginger', fontWeight: 'normal'}} text={'All'}/>
									</a>
								}
								<div style={{marginLeft:15}}> 
								{this.state.found?
									<Button style={{ backgroundColor: "#332a7c", height: 23, width: 61, borderRadius: 5, textAlign: 'center', paddingTop: 3, color: '#ffffff', fontSize: 10, fontFamily: 'F37Ginger', fontWeight: 'normal'}} text={'Found'}/>
									:
									<a onClick={()=>this.handleFoundClick()}  style={{cursor:'pointer'}}>
										<Button style={{  backgroundColor: "#f3f4f7", height: 23, width: 61, borderRadius: 5, textAlign: 'center', paddingTop: 3, color: '#332a7c', fontSize: 10, fontFamily: 'F37Ginger', fontWeight: 'normal'}} text={'Found'}/>
									</a>
								}
								</div>
								<div style={{marginLeft:15}}> 
								{this.state.not_found?
									<Button style={{ backgroundColor: "#332a7c", height: 23, width: 81, borderRadius: 5, textAlign: 'center', paddingTop: 3, color: '#ffffff', fontSize: 10, fontFamily: 'F37Ginger', fontWeight: 'normal'}} text={'Not Found'}/>
									:
									<a onClick={()=>this.handleNotFoundClick()} style={{cursor:'pointer'}}>
										<Button style={{  backgroundColor: "#f3f4f7", height: 23, width: 81, borderRadius: 5, textAlign: 'center', paddingTop: 3, color: '#332a7c', fontSize: 10, fontFamily: 'F37Ginger', fontWeight: 'normal'}} text={'Not Found'}/>
									</a>
								}
								</div>
							</Row>

							{this.state.all?
							<div>
							<a onClick={()=> this.handleToggleCallOpening(1)} style={{cursor:'pointer'}}> 
								<Row style={{marginLeft:15, marginTop:15}}> 
								{this.state.first_call?
									<FeatherIcon icon="chevron-up" size="18" color="#11263c"/>
									:
									<FeatherIcon icon="chevron-down" size="18" color='#11263c' />
								}
									<h1 style={{marginLeft:10, fontFamily:'#F37Ginger', fontSize:12, color:'#11263c'}}>
										Call Opening
									</h1>
								</Row>
							</a>
							{this.state.first_call?
								<>
									<a onClick={()=> this.handleRecordedLine()} style={{cursor:'pointer'}}> 
										<Row style={{marginLeft:25, marginTop:10}}> 
											{this.state.recorded_line?
												<FeatherIcon icon="chevron-up" size="18" color="#11263c"/>
												:
												<FeatherIcon icon="chevron-down" size="18" color='#11263c' />
											}
											<h1 style={{marginLeft:10, fontFamily:'#F37Ginger', fontSize:12, color:'#11263c'}}>
												Recorded Line
											</h1>
											<h1 style={{position:'absolute', right:20, fontSize:12, fontFamily:'F37Ginger', color:'#8bf087'}}>
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
										<Row style={{marginLeft:25, marginTop:10}}> 
											{this.state.greeting?
												<FeatherIcon icon="chevron-up" size="18" color="#11263c"/>
												:
												<FeatherIcon icon="chevron-down" size="18" color='#11263c' />
											}
											<h1 style={{marginLeft:10, fontFamily:'#F37Ginger', fontSize:12, color:'#11263c'}}>
												Meaningful Greeting
											</h1>
											<h1 style={{position:'absolute', right:20, fontSize:12, fontFamily:'F37Ginger', color:'#8bf087'}}>
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
											<h1 style={{marginLeft:75, fontFamily:'#F37Ginger', fontSize:12, color:'#a1a9b3'}}>
												May | Speak with
											</h1>
											<h1 style={{position:'absolute', right:20, fontWeight:'normal', fontSize:12, fontFamily:'F37Ginger', color:'#a1a9b3'}}>
												Not Found
											</h1>
										</Row>
									</div>
								</>
							: null}
							<a onClick={()=> this.handleToggleCallOpening(2)} style={{cursor:'pointer'}}> 
								<Row style={{marginLeft:15, marginTop:15}}> 
								{this.state.second_call?
									<FeatherIcon icon="chevron-up" size="18" color="#11263c"/>
									:
									<FeatherIcon icon="chevron-down" size="18" color="#11263c"/>
								}
									<h1 style={{marginLeft:10, fontFamily:'#F37Ginger', fontSize:12, color:'#11263c'}}>
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
							<a onClick={()=> this.handleToggleCallOpening(3)} style={{cursor:'pointer'}}> 
								<Row style={{marginLeft:15, marginTop:15}}> 
									{this.state.third_call?
										<FeatherIcon icon="chevron-up" size="18" color="#11263c"/>
										:
										<FeatherIcon icon="chevron-down" size="18" color="#11263c"/>
									}
										<h1 style={{marginLeft:10, fontFamily:'#F37Ginger', fontSize:12, color:'#11263c'}}>
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
								<a onClick={()=> this.handleToggleCallOpening(1)} style={{cursor:'pointer'}}> 
									<Row style={{marginLeft:15, marginTop:15}}> 
									{this.state.first_call?
										<FeatherIcon icon="chevron-up" size="18" color="#11263c"/>
										:
										<FeatherIcon icon="chevron-down" size="18" color="#11263c"/>
									}
										<h1 style={{marginLeft:10, fontFamily:'#F37Ginger', fontSize:12, color:'#11263c'}}>
											Call Opening
										</h1>
									</Row>
								</a>
								{this.state.first_call?
									<>
										<a onClick={()=> this.handleRecordedLine()} style={{cursor:'pointer'}}> 
											<Row style={{marginLeft:25, marginTop:10}}> 
												{this.state.recorded_line?
													<FeatherIcon icon="chevron-up" size="18" color="#11263c"/>
													:
													<FeatherIcon icon="chevron-down" size="18" color="#11263c"/>
												}
												<h1 style={{marginLeft:10, fontFamily:'#F37Ginger', fontSize:12, color:'#11263c'}}>
													Recorded Line
												</h1>
												<h1 style={{position:'absolute', right:20, fontSize:12, fontFamily:'F37Ginger', color:'#8bf087'}}>
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
											<Row style={{marginLeft:25, marginTop:10}}> 
												{this.state.greeting?
													<FeatherIcon icon="chevron-up" size="18" color="#11263c"/>
													:
													<FeatherIcon icon="chevron-down" size="18" color="#11263c"/>
												}
												<h1 style={{marginLeft:10, fontFamily:'#F37Ginger', fontSize:12, color:'#11263c'}}>
													Meaningful Greeting
												</h1>
												<h1 style={{position:'absolute', right:20, fontSize:12, fontFamily:'F37Ginger', color:'#8bf087'}}>
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
								<a onClick={()=> this.handleToggleCallOpening(1)} style={{cursor:'pointer'}}> 
									<Row style={{marginLeft:15, marginTop:15}}> 
									{this.state.first_call?
										<FeatherIcon icon="chevron-up" size="18" color="#11263c"/>
										:
										<FeatherIcon icon="chevron-down" size="18" color="#11263c"/>
									}
										<h1 style={{marginLeft:10, fontFamily:'#F37Ginger', fontSize:12, color:'#11263c'}}>
											Call Opening
										</h1>
									</Row>
								</a>
								<div>
									{this.state.first_call?
									<Row style={{marginTop:7}}> 
										<h1 style={{marginLeft:75, fontFamily:'#F37Ginger', fontSize:12, color:'#a1a9b3'}}>
											May | Speak with
										</h1>
										<h1 style={{position:'absolute', right:20, fontWeight:'normal', fontSize:12, fontFamily:'F37Ginger', color:'#a1a9b3'}}>
											Not Found
										</h1>
									</Row>
									: null }
								</div>
								<a onClick={()=> this.handleToggleCallOpening(2)} style={{cursor:'pointer'}}> 
									<Row style={{marginLeft:15, marginTop:15}}> 
									{this.state.second_call?
										<FeatherIcon icon="chevron-up" size="18" color="#11263c"/>
										:
										<FeatherIcon icon="chevron-down" size="18" color="#11263c"/>
									}
										<h1 style={{marginLeft:10, fontFamily:'#F37Ginger', fontSize:12, color:'#11263c'}}>
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
								<a onClick={()=> this.handleToggleCallOpening(3)} style={{cursor:'pointer'}}> 
									<Row style={{marginLeft:15, marginTop:15}}> 
										{this.state.third_call?
											<FeatherIcon icon="chevron-up" size="18" color="#11263c"/>
											:
											<FeatherIcon icon="chevron-down" size="18" color="#11263c"/>
										}
											<h1 style={{marginLeft:10, fontFamily:'#F37Ginger', fontSize:12, color:'#11263c'}}>
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
						<Col md={9} style={{paddingTop:10, borderLeft:'2px solid #f3f4f7',}}>
							<div>
								<p style={{paddingTop:5, fontSize:10, color:'#a1a9b3', lineHeight:1.2, fontFamily:'F37Ginger'}}>
									00:04 min
								</p>
							</div>
							<div style={{backgroundColor:'#f3f4f7', width:70+'%', borderRadius:30}}>
								<p style={{paddingLeft:20, paddingRight:20, fontSize:14, color:'#11263c', fontWeight:'normal', fontFamily:'F37Ginger', paddingTop:13, paddingBottom:13}}>
									Hello There. Welcome to Flipkart.com. Some more text here.
								</p>
							</div>
							<div style={{}}>
								<p style={{paddingTop:5, position:'absolute', color:'#a1a9b3', fontSize:10, fontFamily:'F37Ginger', right:20}}>
									00:04 min
								</p>
							</div>
							<div style={{marginTop:50, marginLeft:30+'%', backgroundColor:'#11263c', width:70+'%', borderRadius:30}}>
								<p style={{paddingLeft:20, paddingRight:20, paddingTop:10, paddingBottom:10, color:'#ffffff', fontSize:14, fontFamily:'F37Ginger', fontWeight:'normal'}}>
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
								</p>
							</div>

							<div style={{ }}>
								<p style={{paddingTop:5, fontSize:10, color:'#a1a9b3', lineHeight:1.2, fontFamily:'F37Ginger'}}>
									00:04 min
								</p>
							</div>
							<div style={{backgroundColor:'#f3f4f7', width:70+'%', borderRadius:30}}>
								<p style={{paddingLeft:20, paddingRight:20, paddingTop:10, paddingBottom:10, fontSize:14, color:'#11263c', fontWeight:'normal', fontFamily:'F37Ginger'}}>
									Hello There. Welcome to Flipkart.com. Some more text here. This text is a bit longer. Which can be seen here!
								</p>
							</div>

							<div style={{}}>
								<p style={{paddingTop:5, position:'absolute', color:'#a1a9b3', fontSize:10, fontFamily:'F37Ginger', right:20}}>
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
								<p style={{paddingTop:5, fontSize:10, color:'#a1a9b3', lineHeight:1.2, fontFamily:'F37Ginger'}}>
									00:04 min
								</p>
							</div>
							<div style={{backgroundColor:'#f3f4f7', width:70+'%', borderRadius:30}}>
								<p style={{paddingLeft:20, paddingRight:20, paddingTop:10, paddingBottom:10, fontSize:14, color:'#11263c', fontWeight:'normal', fontFamily:'F37Ginger'}}>
									Hello There. Welcome to Flipkart.com. Some more text here.
								</p>
							</div>

							<div style={{}}>
								<p style={{paddingTop:5, position:'absolute', color:'#a1a9b3', fontSize:10, fontFamily:'F37Ginger', right:20}}>
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
				<Col md={3} style={{margin:0,padding:0, backgroundColor:'#f3f4f7', paddingBottom:80}}>
					
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
				</Col>
			</Row>
        );
    }
}


export default Home;
