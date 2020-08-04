import React, {Component} from 'react'

class Photo extends Component{
    constructor(props){
        super(props)
    }

    getUrl(){
        var url = 'https://picsum.photos/400?random=' + this.props.id
        return url
    }

    handleRemove = (e) => {
        console.log('hahaha')
        var id = this.props.id
        this.props.removePhoto(id)
    }

    render(){
        return(
            <div className="photo">
                <img src={this.getUrl()} alt=""/>
                <div className="photo-content">
                    <div className="photo-location">{this.props.location}</div>
                    <div className="photo-description">{this.props.description}</div>
                    <i className="fas fa-times-circle photo-remove" onClick={this.handleRemove}></i>
                </div>
            </div>
        )
    }
}

export default Photo;