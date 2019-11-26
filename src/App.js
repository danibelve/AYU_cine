import React from 'react';
import Home from './Pages/Home/Home'
import Filter from './Pages/Filter/Filter'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {

  render() {
    return (
        <Router>
          <Route path="/" exact component={Home}/>
          <Route path="/filter" exact component={Filter}/>
        </Router>
    );
  }
}

export default App;