import React from 'react';


class  BodyComponent extends React.Component{

    constructor(){
        super();

        this.state = {
            theme:"dark"
        }
    }

    render(){

        return(

            <div className="body-main">

                <div className="body-container">

                    <div className="body-section">
                        
                    </div>

                </div>

            </div>

        )
    }
}

export default BodyComponent;