import * as ActionTypes from './ActionTypes'

export const updateVideoApproval = (videoId, approved) => ({
  type: ActionTypes.UPDATE_VIDEO_APPROVAL,
  payload: {
    videoId: videoId,
    approved: approved
  }
})

export const login = (username, password) => ({
  type: ActionTypes.LOGIN,
  payload: {
    username: username,
    password: password
  }
})

export const logout = () => ({
  type: ActionTypes.LOGOUT,
  payload: {}
})