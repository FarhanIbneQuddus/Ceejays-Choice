import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Play, Star, Calendar, Users } from 'lucide-react';
import VideoPlayer from './VideoPlayer';

interface AnimeData {
  id: number;
  title: string;
  description: string;
  genre: string[];
  rating: number;
  year: number;
  episodes: number;
  image: string;
  trailer: string;
  videos: Array<{
    title: string;
    url: string;
    type: 'trailer' | 'episode' | 'preview';
  }>;
}

interface AnimeCardProps {
  anime: AnimeData;
  index: number;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ anime, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(anime.videos[0]);

  return (
    <div 
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Card Header */}
      <div className="relative overflow-hidden">
        <img 
          src={anime.image} 
          alt={anime.title}
          className="w-full h-64 object-contain transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <button 
          className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <Play className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-300">
            {anime.title}
          </h3>
          <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full flex-shrink-0 ml-2">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-semibold text-yellow-700">{anime.rating}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {anime.description}
        </p>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{anime.year}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{anime.episodes} Episodes</span>
          </div>
        </div>

        {/* Genres */}
        <div className="flex flex-wrap gap-2 mb-4">
          {anime.genre.map((g, idx) => (
            <span 
              key={idx}
              className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-xs font-medium rounded-full"
            >
              {g}
            </span>
          ))}
        </div>

        {/* Expand Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-medium hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
        >
          <span>{isExpanded ? 'Hide' : 'Watch'} Trailers</span>
          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {/* Expandable Video Section */}
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="p-6 pt-0 bg-gray-50">
          {/* Video Tabs */}
          <div className="flex gap-2 mb-4 overflow-x-auto">
            {anime.videos.map((video, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedVideo(video)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  selectedVideo.url === video.url
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'
                }`}
              >
                {video.title}
              </button>
            ))}
          </div>

          {/* Video Player */}
          <VideoPlayer video={selectedVideo} />
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;