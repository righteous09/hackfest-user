import React from 'react';
import './ContactComponent.css'

class  ContactComponent extends React.Component{

    constructor({props}){
        super();

        this.state = {
            username:"",
            phone:"",
            info:""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleAddUser = this.handleAddUser.bind(this);
    }
    
    handleChange(event){

        let key = event.target.name
        let value = event.target.value

        // this.state[key] = value
        this.setState((state)=>{
            state[key] = value
            return state;
        })
    }

    handleAddUser(){
        
        this.props.data.add(this.state.phone, this.state.username, this.state.info);
    }

    render(){

        
        return(

            <div className="contact-container">


                <div className="user-container">

                    <div className="user-card w-50">

                        <div className="user-card-item">
                        <input type="text" 
                                name = "username" 
                                className="user-card-value" 
                                placeholder = "Name"
                                onChange={this.handleChange} 
                                value = {this.state.username}/>
                        </div>

                        <div className="user-card-item">
                            <input 
                                type="text" 
                                name = "phone" 
                                className="user-card-value" 
                                placeholder="Phone No." 
                                onChange={this.handleChange} 
                                value = {this.state.phone}/>
                        </div>

                        <div className="user-card-item">
                            <input 
                                type="text" 
                                name = "info" 
                                className="user-card-value" 
                                placeholder = "Info"
                                onChange={this.handleChange}  
                                value={this.state.info}/>
                        </div>

                        <div className="user-card-item">
                            <button className="btn" onClick={this.handleAddUser}> Add User </button>
                        </div>

                    </div>

                </div>

            </div>

        )
    }
}

export default ContactComponent;