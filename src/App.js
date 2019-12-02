import React from 'react';
import Home from './Pages/Home/Home';
import Filter from './Pages/Filter/Filter';
import Filter2 from './Pages/Filter2/Filter2';
import Filter3 from './Pages/Filter3/Filter3';
import Filter4 from './Pages/Filter4/Filter4';
import Pago from './Pages/Pago/Pago';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {

  render() {
    return (
        <Router>
          <Route path="/" exact component={Home}/>
          <Route path="/filter"  component={Filter}/>
          <Route path="/filter2"  component={Filter2}/>
          <Route path="/filter3"  component={Filter3}/>
          <Route path="/filter4" component={Filter4}/>
          <Route path="/pago" component={Pago}/>
        </Router>
    );
  }
}

export default App;