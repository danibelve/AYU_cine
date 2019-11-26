import React from 'react';
import Button from '@material-ui/core/Button';
import './Filter.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

class Filter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <main id="mainContent">
          <h1>Filter</h1>
        </main>
        <Footer></Footer>
      </React.Fragment>   
    );
  }
}

export default Filter;
