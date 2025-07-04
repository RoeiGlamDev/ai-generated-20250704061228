import Link from 'next/link';

export default function VideoCard({ video }) {
  return (
    <div className="video-card">
      <Link href={`/video`}>
        <a>
          <img src={video.thumbnailUrl} alt={video.title} />
          <h2>{video.title}</h2>
          <p>{video.duration}</p>
        </a>
      </Link>
    </div>
  );
}