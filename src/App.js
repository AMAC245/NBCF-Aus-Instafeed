import React, { Component } from 'react';
import './App.css';
import ImageComponent from './ImageComponent.js';

export default class App extends Component {
  state = { feed: [], loading: true }
  
  componentDidUpdate() {
    this.fetchTags()
  }

  fetchTags = async () => {
    const response = await fetch('data.json')
    const data = await response.json()
    
    this.setState({ feed: data.data, loading: false})    
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
