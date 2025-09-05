import { Search, Filter, Sparkles } from 'lucide-react';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedGenre: string;
  onGenreChange: (value: string) => void;
  genres: string[];
}

const Header: React.FC<HeaderProps> = ({
  searchTerm,
  onSearchChange,
  selectedGenre,
  onGenreChange,
  genres,
}) => {
  return (
    <header className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="animated-background">
        <div className="grid-overlay"></div>
        <div className="pure-heart heart-1"></div>
        <div className="pure-heart heart-2"></div>
        <div className="pure-heart heart-3"></div>
        <div className="pure-heart heart-4"></div>
        <div className="pure-heart heart-5"></div>

        {/* Floating elements */}
        <div className="floating-item" style={{ top: '20%', left: '10%' }}>One piece is peak 💜</div>
        <div className="floating-item" style={{ top: '30%', right: '15%' }}>I told you so 🍺</div>
        <div className="floating-item" style={{ bottom: '40%', left: '15%' }}>💜</div>
        <div className="floating-item" style={{ bottom: '20%', right: '10%' }}>😂</div>
        <div className="floating-item" style={{ top: '15%', left: '50%' }}>💜</div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Logo and Title */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl">
              <img src="logo.png" alt="" />
            </div>
          </div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Discover greatness !
          </p>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Rated by the wise unemployed professional binge watcher
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search anime..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-300"
            />
          </div>

          {/* Genre Filter */}
          <div className="relative">
            <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={selectedGenre}
              onChange={(e) => onGenreChange(e.target.value)}
              className="pl-12 pr-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-300 cursor-pointer appearance-none min-w-48"
            >
              <option value="" className="bg-gray-900 text-white">All Genres</option>
              {genres.map((genre) => (
                <option key={genre} value={genre} className="bg-gray-900 text-white">
                  {genre}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;