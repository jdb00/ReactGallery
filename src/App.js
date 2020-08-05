import React, { Component } from 'react';
import NewPhotoForm from './NewPhotoForm';
import Photo from './Photo';

import './App.css';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      photos: [
        {
          id: 1,
          location: 'New Zealand',
          description: 'This is my nice photo that I took while on holiday in New Zealand'
        },
        {
          id: 2,
          location: 'NZ',
          description: 'This is a photo'
        },
        {
          id: 3,
          location: 'NZ',
          description: 'This is a photo'
        },
        {
          id: 4,
          location: 'NZ',
          description: 'This is a photo'
        },
        {
          id: 5,
          location: 'NZ',
          description: 'This is a photo'
        }
      ]
    }
  }

  addPhoto = (data) => {
    console.log('clicked')
    var newPhoto = {
      id: Date.now(),
      ...data
    }

    var newList = [newPhoto, ...this.state.photos]

    console.log(newList)

    this.setState({
      photos: newList
    })
  }

  removePhoto = (id) =>{
    console.log(id)
    var photos = this.state.photos

    var filteredPhotos = photos.filter((item) => {
      return item.id !== id
    })

    this.setState({
      photos: filteredPhotos
    })
  }

  updatePhoto = (id, data) => {
    console.log(id, data)

    var updated = this.state.photos.map((item) => {
      
      return (item.id === id) ? {...item, ...data} : item
    })

    this.setState({
      photos: updated
    })
  }

  render(){
    return (
        <div className="wrap">
          <div className="container">
              <NewPhotoForm addPhoto={this.addPhoto}/>
    
              <div className="photos">
                {
                  this.state.photos.map((item)=>{
                    var photoProps ={
                      key: item.id,
                      id: item.id,
                      removePhoto: this.removePhoto,
                      updatePhoto: this.updatePhoto,
                      location: item.location,
                      description: item.description
                    }

                    return(
                      <Photo {...photoProps}/>
                    )
                  })
                } 
              </div>
            </div>
        </div>
    );
  }






  }
  

export default App;
