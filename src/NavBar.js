import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineBars4 } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { NavLink } from 'react-router-dom'

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state={
      surl:"",
      sval:""
    }
  }
  Srchbtn=()=>{
    // e.preventDefault();
    // console.log('Search button!!')
    let val=document.getElementsByClassName("srch")[0].value;
    this.setState({surl:"/"+val})
    // console.log('value',val)
    if(val.length===0) console.log('Type your query first!');
    else this.props.Srchf(val);
  }
  
  HandleChange=()=>{
    let val=document.getElementsByClassName("srch")[0].value;
    // console.log('value',val)
    this.setState({sval:val})
    // console.log('sval-',this.state.sval)

  }
  handleEnter = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent default form submission
      this.Srchbtn(); // Call your search function manually
    }
  };
  
  render() {
    return (
        <>
        <nav className='navb'>
        <span ><button className='mnub'  onClick={this.props.Ctrlf}>{<HiOutlineBars4 style={{scale:"2"}}/>}</button></span>
        <span className='icon'><Link to="/">Nwscape</Link></span>
        {/* <SearchBar/> */}
            <form className="d-flex " role="search">
              <input className=" me-2 srch" type="search" placeholder="Search topic" aria-label="Search  " onChange={this.HandleChange} onKeyDown={this.handleEnter}/>
              {/* {console.log('sval-',this.state.sval)} */}
              <  NavLink to="/Search" className={`btn btn-outline srb ${this.state.sval.replace(/\s/g, "").length===0 ? 'disablSrch' : 'enablSrch'}`}  onClick={this.Srchbtn}><FaSearch/></NavLink>
            </form>
              {/* <NavLink to="/Search"className='ita' onClick={this.Srchbtn}>Search</NavLink> */}
            {/* <button className="btn btn-outline-success srb" onClick={this.Srchbtn} >Search</button> */}
            <div className="acc"></div>
            <div className="set"></div>
        </nav>
        </>
    )
  }
}
