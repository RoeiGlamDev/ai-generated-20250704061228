import React from 'react';

export default function VideoPlayer({ videoUrl, thumbnailUrl, duration }) {
  return (
    <div className="video-player">
      <video
        src={videoUrl}
        poster={thumbnailUrl}
        controls
        width="100%"
        height="100%"
      />
      <p>Duration: {duration}</p>
    </div>
  );
}