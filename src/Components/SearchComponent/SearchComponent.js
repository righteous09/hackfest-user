import React from 'react';
import './SearchComponent.css'

class  SearchComponent extends React.Component{

    constructor({props}){
        super();

        this.state = {
            theme:"dark"
        }
    }
    
    render(){

        const Item = (data)=>{
            return <h1>{data.name}</h1>
        }

        const ItemList = ({data})=>{

            let arr = data
            // return <div>hello</div>
            let itemList = arr.map((item)=>{
                return <Item name={item.name}/>
            })
            return <div>
                {itemList}
            </div>
        }

        return(
            <div className="search-container">

                <div className="search-box">

                    <input 
                        className = "search_input"
                        placeholder="Search Here"
                        type="text"
                        />
                    <img src="search_icon.png" alt="" className="search-box-logo" />
                
                </div>

                <div className="contact-list-item">

                    <ItemList data = {this.props.data.getList("", this.props.data)}/>

                </div>

            </div>
        )
    }
}

export default SearchComponent;