import React from 'react';
import AnimeCard from './AnimeCard';
import { AnimeData } from '../data/animeData';

interface AnimeGridProps {
  animes: AnimeData[];
}

const AnimeGrid: React.FC<AnimeGridProps> = ({ animes }) => {
  if (animes.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-24 h-24 flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">😒</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-200 mb-2">If it's not here, it is not worth watching.</h3>
        <p className="text-gray-100">Try adjusting your search or filter criteria</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {animes.map((anime, index) => (
        <div 
          key={anime.id}
          className="animate-fade-in-up"
          style={{ 
            animation: `fadeInUp 0.6s ease-out ${index * 100}ms both` 
          }}
        >
          <AnimeCard anime={anime} index={index} />
        </div>
      ))}
    </div>
  );
};

export default AnimeGrid;