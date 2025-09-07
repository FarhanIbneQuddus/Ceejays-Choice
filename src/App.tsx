import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import AnimeGrid from './components/AnimeGrid';
import { animeRecommendations, getAllGenres } from './data/animeData';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  
  const genres = getAllGenres();
  
  const filteredAnimes = useMemo(() => {
    return animeRecommendations.filter(anime => {
      const matchesSearch = anime.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          anime.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGenre = selectedGenre === '' || anime.genre.includes(selectedGenre);
      
      return matchesSearch && matchesGenre;
    });
  }, [searchTerm, selectedGenre]);
//style="background-image: url('bgImage.png');"
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100" style={{ backgroundImage: "linear-gradient(rgba(10, 10, 10, 0.8), rgba(183, 0, 255, 0.4)), url('/bgImage.png')",backgroundSize: '100%', backgroundPosition: 'center 40%', width: '100vw' }}>
      <Header 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedGenre={selectedGenre}
        onGenreChange={setSelectedGenre}
        genres={genres}
      />
      
      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-200 mb-2">
            Recommended for You
          </h2>
          <p className="text-gray-300">
            {filteredAnimes.length} {filteredAnimes.length === 1 ? 'Content' : 'Contents'} found
          </p>
        </div>
        
        <AnimeGrid animes={filteredAnimes} />
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Ceejay's Delight
          </h3>
          <p className="text-gray-400 mb-4">
            Your gateway to the world of awesomenessss.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
      </footer>
    </div>
  );
}

export default App;