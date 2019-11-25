import React from 'react';
import './App.css';
import MovieCard from './Components/MovieCard/MovieCard';

class App extends React.Component {
  render() {
    return (
      <div className="moviedetails-card">
        <MovieCard></MovieCard>
      </div>
    );
  }
}

export default App;
