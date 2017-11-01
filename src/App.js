import React, { Component } from 'react';
import './App.css';
import ImageComponent from './ImageComponent.js';

export default class App extends Component {
  state = { feed: [], loading: true }
  
  componentDidUpdate() {
    this.fetchTags()
  }

  fetchTags = () => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => this.setState({ feed: data.data, loading: false })
      .catch(error => console.log(error))
  }
            
  render() {
    
    const { feed } = this.state
    
    return (
      <div className="App">
        {feed.map(image => {
          return(
            <ImageComponent images={image} />
          )})
        }
      </div>
    );
  }
}
