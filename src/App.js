import React, { Component } from 'react'
import NavBar from './NavBar'
import Menu from './Menu'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nwzbox from './Nwzbox'
import Footer from './Footer';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  constructor() {
    super();
    this.state = { 
      slibtn: true,
      srttl:"",
      srnurl:"",
      Surl:"",
      progress:"10" }; // Define initial state with slibtn as false

  }

  Setprogress=(prgrs)=>{
    this.setState({progress:prgrs})
  }

  Controlslib = () => {
    this.setState({ slibtn: !this.state.slibtn }); // Invert slibtn's value
    // console.log(this.state.slibtn)
  };
  SearchFunc=(q)=>{
    // console.log('qt-',typeof(q));
    this.setState({
      srnurl:"https://newsapi.org/v2/top-headlines?q="+q+"&apiKey=e26af2f645b84589bc191384dd091ef4",
      srttl:q,
      Surl:"/"+q,
    })
    // let qlnk="https://newsapi.org/v2/top-headlines?q="+q+"&apiKey=e26af2f645b84589bc191384dd091ef4";
    // console.log('search l-',qlnk);
    // <Nwzbox ProgrsFunc={this.Setprogress} ttl={q} jsnurl={qlnk}/>
  }
  render() {
    return (
      <>
        <Router>
        <LoadingBar
        height={2}
        color='white'
        progress={this.state.progress}
        />
          <NavBar Ctrlf={this.Controlslib}  Srchf={this.SearchFunc}/>
          {/* {console.log(this.state.slibtn)} sources=bbc-news*/}
          <div className="cntr">

          <Menu slb={this.state.slibtn} pth={window.location.pathname}/>
          {/* <Nwzbox ProgrsFunc={this.Setprogress} ttl={"school"} jsnurl="https://newsapi.org/v2/top-headlines?q=school&apiKey=e26af2f645b84589bc191384dd091ef4"/> */}

          <Routes>
            <Route exact path="/Search"  element={<Nwzbox ProgrsFunc={this.Setprogress} ttl={"News related to :"+this.state.srttl} jsnurl={this.state.srnurl}/>}/>
            <Route exact path="/"  element={<Nwzbox ProgrsFunc={this.Setprogress} ttl="Top trending" jsnurl="https://newsapi.org/v2/top-headlines?category=general&apiKey=e26af2f645b84589bc191384dd091ef4"/>}/>
            <Route exact path="/India"  element={<Nwzbox ProgrsFunc={this.Setprogress} ttl="India's top headlines" jsnurl="https://newsapi.org/v2/top-headlines?country=in&apiKey=e26af2f645b84589bc191384dd091ef4&page=1&pageSize=20"/>}/>
            <Route exact path="/Entertainment"  element={<Nwzbox ProgrsFunc={this.Setprogress} ttl="Entertainment" jsnurl="https://newsapi.org/v2/top-headlines?category=entertainment&apiKey=e26af2f645b84589bc191384dd091ef4"/>}/>
            <Route exact path="/Cricket"  element={<Nwzbox ProgrsFunc={this.Setprogress} ttl="Cricket" jsnurl="https://newsapi.org/v2/top-headlines?q=cricket&apiKey=e26af2f645b84589bc191384dd091ef4"/>}/>
            <Route exact path="/Business"  element={<Nwzbox ProgrsFunc={this.Setprogress} ttl="Business" jsnurl="https://newsapi.org/v2/top-headlines?category=business&apiKey=e26af2f645b84589bc191384dd091ef4"/>} />
            <Route exact path="/Technology"  element={<Nwzbox ProgrsFunc={this.Setprogress} ttl="Technology" jsnurl="https://newsapi.org/v2/top-headlines?category=technology&apiKey=e26af2f645b84589bc191384dd091ef4"/>}/>
            <Route exact path="/Sports"  element={<Nwzbox ProgrsFunc={this.Setprogress} ttl="Sports" jsnurl="https://newsapi.org/v2/top-headlines?category=sports&apiKey=e26af2f645b84589bc191384dd091ef4"/>}/>
            <Route exact path="/Health"  element={<Nwzbox ProgrsFunc={this.Setprogress} ttl="Health" jsnurl="https://newsapi.org/v2/top-headlines?category=health&apiKey=e26af2f645b84589bc191384dd091ef4"/>}/>
            <Route exact path="/Science"  element={<Nwzbox ProgrsFunc={this.Setprogress} ttl="Science" jsnurl="https://newsapi.org/v2/top-headlines?category=science&apiKey=e26af2f645b84589bc191384dd091ef4"/>}/>

          </Routes>
          </div>
        </Router>
        <Footer/>
      </>
    )
  }
}

