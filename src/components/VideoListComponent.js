import React from 'react';
import { Media, Button } from 'reactstrap';

function RenderKidVideo({video}) {
  return (
    <Media tag="li" className="video-listing">
      <Media left middle>
        <Media object src={`assets/images/${video.thumbnail}`}  href={video.url} alt={video.name} />
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
      <Media href={video.url} target="_blank" left middle>
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
    </div>
  )
}

export default VideoList;