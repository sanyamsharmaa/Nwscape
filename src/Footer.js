import React, { Component } from 'react'
import { FaLinkedin,FaFacebook } from "react-icons/fa";
import { FaXTwitter,FaSquareInstagram } from "react-icons/fa6";
export default class Footer extends Component {
    render() {
        return (
            <footer>
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" style={{backgroundColor:'black', color:'white', marginTop:'5px'}}>

                    <div className="me-5 d-none d-lg-block" >
                        <span>© 2023 Copyright:Nwscape</span>
                    </div>
                    <div>
                        <a href="/" className="me-4 text-reset">
                            {<FaFacebook/>}
                        </a>
                        <a href="/" className="me-4 text-reset">
                            {<FaXTwitter />}
                        </a>
                        <a href="/" className="me-4 text-reset">
                            {<FaSquareInstagram/>}
                        </a>
                        <a href="/" className="me-4 text-reset">
                           {<FaLinkedin />}
                        </a>
                    </div>
                    
                </section>
            </footer>
        )
    }
}
