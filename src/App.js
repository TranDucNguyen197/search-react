import React, {Component} from 'react'
import Search from './components/Search'
import ImageList from './components/ImageList'
import api from './api/api'

import { connect} from 'react-redux'
import { changeTitle} from './actions'

class App extends Component {
    state={
        images: []
    }
    
    handleSearchTerm= async(term)=>{
            const response = await api.get("/search/photos",{
                params: { query: term, per_page: 30, page: Math.floor(Math.random() * 100) + 1 }
            });
            console.log(this)
            this.setState({ images: response.data.results });
        
        }

    handleClick=()=>{
        this.props.changeTitle('Change!')
    }

    render(){
        return(
            <div className="ui container" style={{marginTop: "10px"}}>
                <Search search={this.handleSearchTerm}/>
                <h1>{this.props.title}</h1>
                <button onClick={this.handleClick}>Change title</button>
                <ImageList />
            </div>
        )
    }
}

const mapStatetoProps = (state) =>{
    return {title: state.title}
}

export default connect(mapStatetoProps,{changeTitle})(App)