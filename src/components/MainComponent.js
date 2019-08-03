import React, { Component } from 'react';
import Header from './HeaderComponent';
import VideoList from './VideoListComponent';

function Main(props) {
  return (
    <div>
      <Header />

      <div className="container">
        <VideoList />
      </div>
    </div>
  )
}

export default Main;