import React, {Component} from 'react'

class NewPhotoForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            location: '',
            description: ''
        }
    }

    handleLocChange = (e) => {
        this.setState({
            location: e.target.value
        })
    }

    handleDesChange = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    handleClick = (e)=>{
        // send state to app as todoprops
        e.preventDefault()
        var data = {
            location: this.state.location,
            description: this.state.description
        }

        this.props.addPhoto(data)

        this.setState({
            location: '',
            description: ''
        })
    }

    render(){
        return(
            <div className="add-photo">
                <div className="form-group">
                    <label htmlFor="location-input">Location:</label>
                    <input type="text" className="form-control" id="location-input" onChange={this.handleLocChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="description-input">Description:</label>
                    <input type="text" className="form-control" id="description-input" onChange={this.handleDesChange}/>
                </div>

                <button type="submit" className="btn btn-primary" onClick={this.handleClick}>Add</button>

                <input type="text" className="update-control" id="location-input" onChange={this.handleLocationInputChange} onBlur={this.handleLocationInputBlur}/>

            </div>
        )
    }
}

export default NewPhotoForm;