import Head from 'next/head';
import VideoPlayer from '../components/VideoPlayer';

export default function Video() {
  return (
    <div>
      <Head>
        <title>Video Player</title>
      </Head>
      <VideoPlayer
        videoUrl="https://videos.pexels.com/video-files/2786540/2786540-hd_1920_1080_25fps.mp4"
        thumbnailUrl="https://images.pexels.com/videos/2786540/free-video-2786540.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
        duration="28s"
      />
    </div>
  );
}