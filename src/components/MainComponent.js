import React, { Component } from 'react'
import Header from './HeaderComponent'
import VideoList from './VideoListComponent'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateVideoApproval } from '../redux/ActionCreators'

const mapStateToProps = state => {
  return {
    videos: state.videos,
  }
}

const mapDispatchToProps = dispatch => ({
  updateVideoApproval: (videoId, approved) => dispatch(updateVideoApproval(videoId, approved))
})


class Main extends Component {
  updateApproval = (videoId, approved) => {
    this.props.updateVideoApproval(videoId, approved)
  };

  render() {
    const kidVideos = () => {
      const filteredVideos = this.props.videos.filter((video) => {
        return video.approved
      })

      return (
        <VideoList videos={filteredVideos} view="kids" updateApproval={this.updateApproval} />
      )
    }

    const parentVideos = () => {
      return (
        <VideoList videos={this.props.videos} view="parents" updateApproval={this.updateApproval} />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));