import React, { Component } from 'react'
import Header from './HeaderComponent'
import VideoList from './VideoListComponent'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { updateVideoApproval, login, logout } from '../redux/ActionCreators'

const mapStateToProps = state => {
  return {
    videos: state.videos,
    loggedIn: state.loggedIn
  }
}

const mapDispatchToProps = dispatch => ({
  updateVideoApproval: (videoId, approved) => dispatch(updateVideoApproval(videoId, approved)),
  login: (username, password) => dispatch(login(username, password)),
  logout: () => dispatch(logout()),
})

class Main extends Component {
  updateApproval = (videoId, approved) => {
    this.props.updateVideoApproval(videoId, approved)
  };

  logoutAndRedirect = () => {
    this.props.logout()
    this.props.history.push('/')
  }

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
        <Header loggedIn={this.props.loggedIn} login={this.props.login} logout={this.logoutAndRedirect} />

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