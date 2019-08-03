import React, { Component } from 'react';
import { Media } from 'reactstrap';

function RenderVideo({video}) {
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

function VideoList(props) {
  const videos = props.videos.map((video) => {
    return (
      <RenderVideo key={video.id} video={video} />
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