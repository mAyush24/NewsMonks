import React, { Component } from 'react';
import Navbar from './components/Navbar';
import NewsGrid from './components/NewsGrid';
import Search from './components/Search';
import Footer from './components/Footer';
import InfinitScroll from './components/NewsGrid_infiniteScroll';
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


class App extends Component {
  page = 15;
  api = process.env.REACT_APP_API_KEY;

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <Router>
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
          height={3}
        />
        <Navbar />
        <div className="my-10 mb-5">...</div>
        <Search />
        <Routes>
          <Route exact path='/' element={<NewsGrid api={this.api} setProgress={this.setProgress} key='general' country='in' category='general' name='General' pageSize={this.page} />}></Route>
          <Route exact path='/general' element={<NewsGrid api={this.api} setProgress={this.setProgress} key='general' country='in' category='general' name='General' pageSize={this.page} />}></Route>
          <Route exact path='/business' element={<NewsGrid api={this.api} setProgress={this.setProgress} key='business' country='in' category='business' name='Business' pageSize={this.page} />}></Route>
          <Route exact path='/entertainment' element={<NewsGrid api={this.api} setProgress={this.setProgress} key='entertainment' country='in' category='entertainment' name='Entertainment' pageSize={this.page} />}></Route>
          <Route exact path='/health' element={<NewsGrid api={this.api} setProgress={this.setProgress} key='health' country='in' category='health' name='Health' pageSize={this.page} />}></Route>
          <Route exact path='/science' element={<NewsGrid api={this.api} setProgress={this.setProgress} key='science' country='in' category='science' name='Science' pageSize={this.page} />}></Route>
          <Route exact path='/sports' element={<NewsGrid api={this.api} setProgress={this.setProgress} key='sports' country='in' category='sports' name='Sports' pageSize={this.page} />}></Route>
          <Route exact path='/technology' element={<InfinitScroll api={this.api} setProgress={this.setProgress} key='technology' country='in' category='technology' name='Technology' pageSize={this.page} />}></Route>
        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default App;
