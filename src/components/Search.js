import React, {Component} from 'react'

class Search extends Component{

    handleChange = (event)=>{
        this.setState({term: event.target.value})
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        this.props.search(this.state.term)
    }

    render(){
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label>Seach Image:</label>
                        <input type="text" onChange={this.handleChange}/>
                    </div>
                </form>
            </div>
        )
    }
}
export default Search