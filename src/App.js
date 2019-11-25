import React from 'react';
import './App.css';
import MovieCard from './Components/MovieCard/MovieCard';

class App extends React.Component {
  handleFormSubmit(e){
    e.preventDefault();
    console.log('You have selected:', this.state.selectedOption);
  }
  render() {
    return (
        <MovieCard></MovieCard>  
    );
  }
}

export default App;
