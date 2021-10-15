import React from 'react';
import ContactComponent from './ContactComponent/ContactComponent';
import HeaderComponent from './HeaderComponent/HeaderComponent';
import './MainComponent.css'
import SearchComponent from './SearchComponent/SearchComponent';
import { Trie } from './utils/Trie';

class  MainComponent extends React.Component{

    constructor(){
        super();

        this.state = {
            list: new Trie(),
            theme:"dark"
        }
    }

    componentDidMount(){
        
        const trie = this.state.list;
    
        let arr = JSON.parse(localStorage.getItem("root"));
        localStorage.removeItem("root");
        localStorage.setItem("root", JSON.stringify([]));
        if(arr == null)
        arr = []
        for(let i =0 ; i < arr.length; i++){
            trie.add(arr[i].phone, arr[i].name, arr[i].info, trie);
        }
        this.render()
    }

    render(){
      
        return (    
            <>
                <HeaderComponent />
                <div className="body-component">
                    
                    <SearchComponent data={this.state.list} />
                    <ContactComponent data = {this.state.list}/>

                </div>
            </>
        )
    }
}

export default MainComponent