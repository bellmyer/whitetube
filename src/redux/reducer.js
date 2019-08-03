import { VIDEOS } from '../shared/videos'
import * as ActionTypes from './ActionTypes'

export const initialState = {
  videos: VIDEOS,
}

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_VIDEO_APPROVAL:
      var newState = {...state}

      newState.videos = newState.videos.map((video) => {
        if (video.id !== action.payload.videoId)
          return video

        video.approved = action.payload.approved
        return video
      })

      return newState

    default:
      return state;
  }
}