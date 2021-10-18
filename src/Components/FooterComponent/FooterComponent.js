import React from 'react';
import './FooterComponent.css'

class  FooterComponent extends React.Component{

    constructor(){
        super();

        this.state = {
            theme:"dark"
        }
    }

    render(){

        return(

            <div className="footer-main">

                <div className="footer-container">

                    <div className="footer-section">

                    </div>

                </div>

            </div>

        )
    }
}

export default FooterComponent;