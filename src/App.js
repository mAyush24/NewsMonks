import React, { Component } from 'react';
import Navbar from './components/Navbar';
import NewsGrid from './components/NewsGrid';
import Search from './components/Search';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


class App extends Component {
  page = 15;
  render() {
    return (
      // <div>
      //   {/* <Navbar /> */}
      //   <Search />
      //   <NewsGrid pageSize={this.page} country='in' category='general' />
      //   <Footer />
      // </div>
      <Router>
        <Navbar />
        <Search />
        <Routes>
          <Route exact path='/' element={<NewsGrid key='general' country='in' category='general' name='General' pageSize={this.page} />}></Route>
          <Route exact path='/general' element={<NewsGrid key='general' country='in' category='general' name='General' pageSize={this.page} />}></Route>
          <Route exact path='/business' element={<NewsGrid key='business' country='in' category='business' name='Business' pageSize={this.page} />}></Route>
          <Route exact path='/entertainment' element={<NewsGrid key='entertainment' country='in' category='entertainment' name='Entertainment' pageSize={this.page} />}></Route>
          <Route exact path='/health' element={<NewsGrid key='health' country='in' category='health' name='Health' pageSize={this.page} />}></Route>
          <Route exact path='/science' element={<NewsGrid key='science' country='in' category='science' name='Science'  pageSize={this.page} />}></Route>
          <Route exact path='/sports' element={<NewsGrid key='sports' country='in' category='sports' name='Sports' pageSize={this.page} />}></Route>
          <Route exact path='/technology' element={<NewsGrid key='technology' country='in' category='technology' name='Technology' pageSize={this.page} />}></Route>
        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default App;
