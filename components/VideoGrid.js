import VideoCard from './VideoCard';

export default function VideoGrid() {
  const videos = [
    {
      id: 1,
      title: 'Video 1',
      thumbnailUrl: 'https://images.pexels.com/videos/2786540/free-video-2786540.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
      duration: '28s',
    },
    {
      id: 2,
      title: 'Video 2',
      thumbnailUrl: 'https://images.pexels.com/videos/2786540/free-video-2786540.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
      duration: '28s',
    },
  ];

  return (
    <div className="video-grid">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}