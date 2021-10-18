import React from 'react';
import './User.css'

class  UserComponent extends React.Component{

    constructor(){
        super();

        this.state = {
            theme:"dark"
        }
    }

    render(){

        return(

            <div className="user-main">

                <user className="card">
                    <div className="user-item">
                        <img src="./assets/img1.jpg" alt="img-here" />
                    </div>
                    <div className="user-item">
                        <h3>User name</h3>
                    </div>
                    <div className="user-item">
                        <h4>Designation</h4>
                    </div>
                </user>
            
            </div>

        )
    }
}

export default UserComponent;