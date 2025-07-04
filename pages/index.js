import Head from 'next/head';
import VideoGrid from '../components/VideoGrid';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>GoldTube</title>
      </Head>
      <div className="hero">
        <Image
          src="https://images.pexels.com/photos/6037741/pexels-photo-6037741.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Man in glasses and brown jacket relaxing indoors while smoking. Moody atmosphere."
          width={5670}
          height={3780}
          className="hero-image"
        />
        <h1 className="hero-title">Welcome to GoldTube</h1>
      </div>
      <VideoGrid />
    </div>
  );
}