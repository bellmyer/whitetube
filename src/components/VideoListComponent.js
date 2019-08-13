import React from 'react';
import { Media, Button } from 'reactstrap';

function RenderKidVideo({video}) {
  return (
    <Media tag="li" className="video-listing">
      <Media href={video.url} target="_blank" left middle>
        <Media object src={`assets/images/${video.thumbnail}`} alt={video.name} />
      </Media>

      <Media body className="ml-5">
        <Media heading>{video.name}</Media>
        <p>{video.description}</p>
      </Media>
    </Media>
  );
}

function RenderParentVideo({video, updateApproval}) {
  return (
    <Media tag="li" className="video-listing">
      <Media href={video.url}target="_blank" left middle>
        <Media object src={`assets/images/${video.thumbnail}`} alt={video.name} />
      </Media>

      <Media body className="ml-5">
        <Media heading>
          <ReviewButton video={video} updateApproval={updateApproval} />
          {video.name}
        </Media>
        <p>{video.description}</p>
      </Media>
    </Media>
  );
}

function ReviewButton({video, updateApproval}) {
  if (video.approved) {
    return (<RejectButton video={video} updateApproval={updateApproval} />)
  }

  return (<ApproveButton video={video} updateApproval={updateApproval} />)
}

function ApproveButton({video, updateApproval}) {
  return (
    <Button outline color="success" className="float-right" onClick={() => {updateApproval(video.id, true)}}>
      <span className="fa fa-thumbs-o-up fa-lg"></span> Approve
    </Button>
  )
}

function RejectButton({video, updateApproval}) {
  return (
    <Button outline color="danger" className="float-right" onClick={() => {updateApproval(video.id, false)}}>
      <span className="fa fa-thumbs-o-down fa-lg"></span> Reject
    </Button>
  )
}

function VideoList(props) {
  const videos = props.videos.map((video) => {
    if (props.view === 'kids') {
      return (
        <RenderKidVideo key={video.id} video={video} />
      )
    }

    return (
      <RenderParentVideo key={video.id} video={video} updateApproval={props.updateApproval} />
    )
  });

  return (
    <div className="row row-content">
      <div className="col-12">
        <Media list>
          {videos}
        </Media>
      </div>

      { props.view === 'kids' &&
        <div className="col-12">
          <div className='password-hint'>
            This is a demo site. The password for login is:
            <br />
            <strong>password</strong>
          </div>

          <p><strong>Video Walkthrough:</strong></p>
          <video src="https://dti6i5hz1tz1z.cloudfront.net/items/3Z2M050k1T3a0p1b1k1h/Screen%20Recording%202019-08-13%20at%2010.37%20AM.mov" controls style={{display: 'block', height: 'auto', width: '90%', border: '2px solid #333'}}>Video Walkthrough</video>
        </div>
      }
    </div>
  )
}

export default VideoList;