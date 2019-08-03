import * as ActionTypes from './ActionTypes'

export const updateVideoApproval = (videoId, approved) => ({
  type: ActionTypes.UPDATE_VIDEO_APPROVAL,
  payload: {
    videoId: videoId,
    approved: approved
  }
})