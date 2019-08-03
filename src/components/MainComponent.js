import React, { Component } from 'react'
import Header from './HeaderComponent'
import VideoList from './VideoListComponent'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    videos: state.videos,
  }
}

class Main extends Component {
  render() {
    const kidVideos = () => {
      const filteredVideos = this.props.videos.filter((video) => {
        return video.approved
      })

      return (
        <VideoList videos={filteredVideos} />
      )
    }

    const parentVideos = () => {
      return (
        <VideoList videos={this.props.videos} />
      )
    }

    return (
      <div>
        <Header />

        <div className="container">
          <Switch>
            <Route path='/kids' component={kidVideos} />
            <Route path='/parents' component={parentVideos} />
            <Redirect to='/kids' />
          </Switch>
        </div>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps)(Main));