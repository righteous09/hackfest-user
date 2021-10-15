import React from 'react';
import './HeaderComponent.css'

class  HeaderComponent extends React.Component{

    constructor(){
        super();

        this.state = {
            theme:"dark"
        }
    }

    render(){

        return(

            <div className="nav_main">
                
                <div className="nav_item">

                    <img src="logo.png" alt="" className="nav_item_img"/>

                </div>

                <div className="nav_item">
                    <h2 className="nav_item_heading">
                        Hactober Fest 2021
                    </h2>
                </div>

            </div>

        )
    }
}

export default HeaderComponent;