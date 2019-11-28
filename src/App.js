import React from 'react';
import Home from './Pages/Home/Home';
import Filter from './Pages/Filter/Filter';
import Filter2 from './Pages/Filter2/Filter2';
import Filter3 from './Pages/Filter3/Filter3';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {

  render() {
    return (
        <Router>
          <Route path="/" exact component={Home}/>
          <Route path="/filter" exact component={Filter}/>
          <Route path="/filter2" exact component={Filter2}/>
          <Route path="/filter3" exact component={Filter3}/>
        </Router>
    );
  }
}

export default App;