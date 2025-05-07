'use client';
import { useEffect, useState } from 'react';
import { extractYouTubeUrls } from '../utils/extractYouTubeUrls';

interface Video {
  url: string;
  embedUrl: string;
  text: string;
  author: string;
}

export default function Home() {
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    async function fetchCasts() {
      const res = await fetch('/api/channel-casts');
      const data = await res.json();
      const youtubeLinks = extractYouTubeUrls(data.casts) as Video[];
      setVideos(youtubeLinks);
    }

    fetchCasts();
  }, []);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Channel YouTube Videos</h1>
      <div className="grid grid-cols-1 gap-6">
        {videos.map((video, idx) => (
          <div key={idx} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <iframe
              width="100%"
              height="315"
              src={video.embedUrl}
              title={`YouTube video ${idx}`}
              allowFullScreen
              className="rounded-lg"
            />
            <p className="mt-2 text-sm text-gray-600">Shared by @{video.author}</p>
            <p className="mt-1 text-sm">{video.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
