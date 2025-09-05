import { Play } from 'lucide-react';
import React from 'react';

interface Video {
  title: string;
  url: string;
  type: 'trailer' | 'episode' | 'preview';
}

interface VideoPlayerProps {
  video: Video;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ video }) => {
  // Extract YouTube video ID from URL
  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeId(video.url);

  return (
    <div className="relative bg-black rounded-xl overflow-hidden shadow-lg max-w-3xl w-full mx-auto">
      <div className="aspect-video w-full h-[180px]">
        {videoId ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
            title={video.title}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Play className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-400">Video not available</p>
            </div>
          </div>
        )}
      </div>
      
      {/* Video Info */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
        <h4 className="text-white font-medium text-sm">{video.title}</h4>
        <span className="inline-block mt-1 px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-xs text-white capitalize">
          {video.type}
        </span>
      </div>
    </div>
  );
};

export default VideoPlayer;