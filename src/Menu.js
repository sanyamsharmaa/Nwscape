import React, { Component } from 'react'
import {SideBarItms} from './SideBarItms'
import { NavLink } from 'react-router-dom'

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state={
      lid:'dactli',
    }
  }

  render() {
    // console.log("rerendered!")
    return (
      <div className={this.props.slb===true?'mnuc':'cmnuc'}>
        {
          
        SideBarItms.map((key)=>{

            return(
                <>
                {/* { x=window.location.pathname===key.lnk?'yes':'No' window.location.pathname===key.lnk?'actli':'dactli'  id={this.props.pth===key.lnk?'actli':'dactli'} }
                {console.log({x})} */}
                <li className="itm" key={key.lnk}><NavLink to={key.lnk} className='ita'>{key.titl}</NavLink></li>
                </>
            )

        })
        
        }
      </div>
    )
  }
}
