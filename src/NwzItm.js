import React, { Component } from 'react'

export default class NwzItm extends Component {
    constructor(){
        super();
        this.state={
            det:"",
        }
    }
    render() {
        let {imgurl, nttl,url,date} =this.props;
        return (
            <>
            <a href={url} rel="noreferrer" target='_blank'><div className="card" style={{width:'100%',}}>
                
                    <img src={imgurl} className='card-img-top' alt="" />
                    <div className="card-body">
                        <p className="card-text">{nttl}</p>
                    </div>
                    <p className="card-text"><small className="text-body-secondary">Last updated  on: {new Date(date).toGMTString()}</small></p>
                </div></a>

            </>
        )
    }
}
