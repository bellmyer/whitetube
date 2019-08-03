import React, { Component } from 'react';
import Header from './HeaderComponent';
import VideoList from './VideoListComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

function Main(props) {
  return (
    <div>
      <Header />

      <div className="container">
        <Switch>
          <Route path='/home' component={() => <VideoList />} />
          <Redirect to='/home' />
        </Switch>
      </div>
    </div>
  )
}

export default withRouter(Main);