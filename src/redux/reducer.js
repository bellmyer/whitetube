import { VIDEOS } from '../shared/videos'
import * as ActionTypes from './ActionTypes'

export const initialState = {
  videos: VIDEOS,
  loggedIn: false,
}

export const Reducer = (state = initialState, action) => {
  var newState = {...state}

  switch (action.type) {
    case ActionTypes.UPDATE_VIDEO_APPROVAL:
      newState.videos = newState.videos.map((video) => {
        if (video.id !== action.payload.videoId)
          return video

        video.approved = action.payload.approved
        return video
      })

      return newState

    case ActionTypes.LOGIN:
      if (action.payload.password === 'password')
        newState.loggedIn = true

      return newState

    case ActionTypes.LOGOUT:
      newState.loggedIn = false

      return newState

    default:
      return state;
  }
}