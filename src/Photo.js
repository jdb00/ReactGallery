import React, {Component} from 'react'

class Photo extends Component{
    constructor(props){
        super(props)
        this.state = 
            {
                isUpdating: false,
                isDescriptionUpdating: false,
                locationContent: '',
                descriptionContent: ''
            }
    }

    getUrl(){
        var url = 'https://picsum.photos/400?random=' + this.props.id
        return url
    }

    handleRemove = (e) => {
        console.log('hahahandleremove')
        var id = this.props.id
        this.props.removePhoto(id)
    }

    handleDblClick = (e) => {
        return (e.target.className === 'photo-location')        
        ?       
        this.setState({
            isUpdating: true
        }) 
        : 
        this.setState({
            isDescriptionUpdating: true
        })
    }

    handleLocationInputChange = (e) => { 
        return(e.target.id === 'location-input') ?
        this.setState({
            locationContent: e.target.value
        }) :
        this.setState({
            descriptionContent: e.target.value
        })

    } 

    handleLocationInputBlur = (e) => {
        this.setState({
            isUpdating: false,
            isDescriptionUpdating: false
        })
        return e.target.id === 'location-input' ?
        this.props.updatePhoto(this.props.id, {location: this.state.locationContent}) : 
        this.props.updatePhoto(this.props.id, {description: this.state.descriptionContent})
    }

    render(){
        return(
            <div className="photo">
                <img src={this.getUrl()} alt=""/>
                <div className="photo-content">
                    <div className="photo-location" onDoubleClick={this.handleDblClick}>{
                        this.state.isUpdating === true ? (
                            <input type="text" className="update-control" id="location-input" onChange={this.handleLocationInputChange} onBlur={this.handleLocationInputBlur}/>
                        ) : this.props.location
                    }</div>
                    <div className="photo-description" onDoubleClick={this.handleDblClick}>{
                        this.state.isDescriptionUpdating === true?
                        (<input type="text" className="update-control" id="description-input" onChange={this.handleLocationInputChange} onBlur={this.handleLocationInputBlur}/>) : this.props.description

                    }</div>
                    <i className="fas fa-times-circle photo-remove" onClick={this.handleRemove}></i>
                </div>
            </div>
        )
    }
}

export default Photo;