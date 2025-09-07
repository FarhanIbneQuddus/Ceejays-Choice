export interface AnimeData {
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
//place i got the card images   https://www.pinterest.com/pin/268667934017452802/
export const animeRecommendations: AnimeData[] = [
  {
    id: 1,
    title: "Demon Slayer: Kimetsu no Yaiba",
    description: "A young boy becomes a demon slayer to avenge his family and cure his sister who has been turned into a demon. Stunning animation and emotional storytelling make this a modern masterpiece.",
    genre: ["Action", "Supernatural", "Historical"],
    rating: 9.3,
    year: 2019,
    episodes: 44,
    image: "https://i.pinimg.com/736x/5f/49/7b/5f497b3e2eb9a843b7dd0e66c342c918.jpg",
    trailer: "https://www.youtube.com/watch?v=VQGCKyvzIM4",
    videos: [
      {
        title: "Official Trailer",
        url: "https://www.youtube.com/watch?v=VQGCKyvzIM4",
        type: "trailer"
      },
      {
        title: "Episode 1 Preview",
        url: "https://www.youtube.com/watch?v=2tAdUT4iDSk",
        type: "episode"
      },
      {
        title: "Character Preview",
        url: "https://www.youtube.com/watch?v=7aMOurgDB-o",
        type: "preview"
      }
    ]
  },
  {
    id: 2,
    title: "Attack on Titan",
    description: "Humanity fights for survival against giant humanoid Titans. A gripping tale of war, freedom, and the price of peace in a world filled with mystery and political intrigue.",
    genre: ["Action", "Drama", "Fantasy"],
    rating: 9.8,
    year: 2013,
    episodes: 87,
    image: "https://i.pinimg.com/1200x/39/e3/40/39e340e553af6f5d69e605093ce2c735.jpg",
    trailer: "https://www.youtube.com/watch?v=MGRm4IzK1SQ",
    videos: [
      {
        title: "Season 1 Trailer",
        url: "https://www.youtube.com/watch?v=MGRm4IzK1SQ",
        type: "trailer"
      },
      {
        title: "Final Season Trailer",
        url: "https://www.youtube.com/watch?v=SlNpRThS9t8",
        type: "trailer"
      },
      {
        title: "Epic Moments",
        url: "https://www.youtube.com/watch?v=EHzBhrncmac",
        type: "preview"
      }
    ]
  },
  {
    id: 3,
    title: "Your Name",
    description: "Two teenagers share a profound, magical connection upon discovering they are swapping bodies. A beautiful story about love, fate, and the red thread that connects souls across time and space.",
    genre: ["Romance", "Drama", "Supernatural"],
    rating: 9.1,
    year: 2016,
    episodes: 1,
    image: "https://i.pinimg.com/1200x/62/19/c6/6219c6e00b76d29bdc07585c9acae9fe.jpg",
    trailer: "https://www.youtube.com/watch?v=xU47nhruN-Q",
    videos: [
      {
        title: "Official Trailer",
        url: "https://www.youtube.com/watch?v=xU47nhruN-Q",
        type: "trailer"
      },
      {
        title: "English Dub Trailer",
        url: "https://www.youtube.com/watch?v=3KR8_igDs1Y",
        type: "trailer"
      },
      {
        title: "Behind the Scenes",
        url: "https://www.youtube.com/watch?v=AfbNS_GKhPw",
        type: "preview"
      }
    ]
  },
  {
    id: 4,
    title: "Spirited Away",
    description: "A young girl enters a world ruled by gods, witches, and spirits where humans are changed into beasts. Studio Ghibli's masterpiece about courage, friendship, and growing up.",
    genre: ["Adventure", "Family", "Fantasy"],
    rating: 9.5,
    year: 2001,
    episodes: 1,
    image: "https://i.pinimg.com/736x/99/d3/f5/99d3f58f48b616750653244e687bf098.jpg",
    trailer: "https://www.youtube.com/watch?v=ByXuk9QqQkk",
    videos: [
      {
        title: "Official Trailer",
        url: "https://www.youtube.com/watch?v=ByXuk9QqQkk",
        type: "trailer"
      },
      {
        title: "Making Of",
        url: "https://www.youtube.com/watch?v=nyFRYsz0hd0",
        type: "preview"
      },
      {
        title: "Art & Animation",
        url: "https://www.youtube.com/watch?v=J4RKLLp0wZY",
        type: "preview"
      }
    ]
  },
  {
    id: 5,
    title: "Jujutsu Kaisen",
    description: "A high school student joins a secret organization of sorcerers to eliminate a powerful curse that he accidentally released. Dark themes with incredible fight choreography and supernatural elements.",
    genre: ["Action", "School", "Supernatural"],
    rating: 9.0,
    year: 2020,
    episodes: 24,
    image: "https://i.pinimg.com/736x/c9/da/5c/c9da5c63acc821d0eadcaa49c4f98cb7.jpg",
    trailer: "https://www.youtube.com/watch?v=4A_X-Dvl0ws",
    videos: [
      {
        title: "Season 1 Trailer",
        url: "https://www.youtube.com/watch?v=4A_X-Dvl0ws",
        type: "trailer"
      },
      {
        title: "Season 2 Teaser",
        url: "https://www.youtube.com/watch?v=tnUGRjb6FRE",
        type: "trailer"
      },
      {
        title: "Character Spotlight",
        url: "https://www.youtube.com/watch?v=PKHQuQF1S8k",
        type: "preview"
      }
    ]
  },
  {
    id: 6,
    title: "One Piece",
    description: "Follow Monkey D. Luffy's epic journey to become the Pirate King. A tale of adventure, friendship, and dreams that spans over two decades with incredible world-building and character development.",
    genre: ["Adventure", "Comedy", "Action"],
    rating: 9.7,
    year: 1999,
    episodes: 1000,
    image: "https://i.pinimg.com/1200x/d9/97/a8/d997a849fd1dbe82f61c874f29964de0.jpg",
    trailer: "https://www.youtube.com/watch?v=Ades3pQbeh8",
    videos: [
      {
        title: "Live Action Trailer",
        url: "https://www.youtube.com/watch?v=Ades3pQbeh8",
        type: "trailer"
      },
      {
        title: "Anime Trailer",
        url: "https://www.youtube.com/watch?v=O4fP_4RHOd4",
        type: "trailer"
      },
      {
        title: "Epic Moments",
        url: "https://www.youtube.com/watch?v=yWCar8kXGi8",
        type: "preview"
      }
    ]
  },
  {
    id: 7,
    title: "My Hero Academia",
    description: "In a world where most humans have superpowers, a powerless boy enrolls in a prestigious hero academy to become the greatest hero. Inspiring themes of perseverance and heroism.",
    genre: ["Action", "School", "Superhero"],
    rating: 8.9,
    year: 2016,
    episodes: 138,
    image: "https://i.pinimg.com/1200x/8d/eb/fd/8debfd80b144df54c916e7fdc5a6a3a3.jpg",
    trailer: "https://www.youtube.com/watch?v=D5fYOnwYkj4",
    videos: [
      {
        title: "Season 1 Trailer",
        url: "https://www.youtube.com/watch?v=D5fYOnwYkj4",
        type: "trailer"
      },
      {
        title: "Movie Trailer",
        url: "https://www.youtube.com/watch?v=8TwJKz3FpjI",
        type: "trailer"
      },
      {
        title: "Character Powers",
        url: "https://www.youtube.com/watch?v=fH3ZTZnh9_M",
        type: "preview"
      }
    ]
  },
  {
    id: 8,
    title: "Naruto",
    description: "A young ninja seeks recognition from his peers and dreams of becoming the Hokage. An epic tale of friendship, perseverance, and never giving up on your dreams despite all obstacles.",
    genre: ["Action", "Adventure", "Martial Arts"],
    rating: 9.2,
    year: 2002,
    episodes: 720,
    image: "https://i.pinimg.com/736x/f1/5b/32/f15b325645bd04dd95b2efe52674fe93.jpg",
    trailer: "https://www.youtube.com/watch?v=1dy2zPPrKD0",
    videos: [
      {
        title: "Classic Trailer",
        url: "https://www.youtube.com/watch?v=1dy2zPPrKD0",
        type: "trailer"
      },
      {
        title: "Shippuden Trailer",
        url: "https://www.youtube.com/watch?v=EKiY7bvMjYg",
        type: "trailer"
      },
      {
        title: "Best Fights",
        url: "https://www.youtube.com/watch?v=H69EWaMD-F4",
        type: "preview"
      }
    ]
  },
  {
    id: 9,
    title: "Vinland Saga",
    description: "A tale of revenge and redemption set in the age of Vikings. A young boy, Thorfinn, joins a band of mercenaries to avenge his father's death, only to become lost in a bloody cycle of violence. A profound story about the true meaning of being a warrior and finding peace in a world of war.",
    genre: ["Action", "Adventure", "Drama", "Historical", "Seinen"],
    rating: 8.8,
    year: 2019,
    episodes: 48,
    image: "https://i.pinimg.com/1200x/36/e0/3f/36e03fd786ddd0e2bd40f6e6ae31b474.jpg",
    trailer: "https://www.youtube.com/watch?v=f8JrZ7Q_p-8",
    videos: [
      {
        title: "Classic Trailer",
        url: "https://www.youtube.com/watch?v=f8JrZ7Q_p-8",
        type: "trailer"
      },
      {
        title: "Season 2 Trailer",
        url: "https://www.youtube.com/watch?v=VHGotYh6hPM",
        type: "trailer"
      },
      {
        title: "Best Fights",
        url: "https://www.youtube.com/watch?v=YBm6Iwsimps",
        type: "preview"
      }
    ]
  },
  {
    id: 10,
    title: "One Punch Man",
    description: "Saitama is a hero who can defeat any opponent with a single punch, but his overwhelming strength has left him bored and unable to enjoy the thrill of battle. This action-comedy follows his mundane quest to find a worthy foe and the recognition he deserves in a world full of monsters and professional heroes.",
    genre: ["Action", "Comedy", "Parody", "Sci-Fi", "Super Power"],
    rating: 8.7,
    year: 2015,
    episodes: 24,
    image: "https://i.pinimg.com/1200x/2b/27/c9/2b27c9d05ece71b1c536fb252d6e7e25.jpg",
    trailer: "https://www.youtube.com/watch?v=Poo5lqoWSGw",
    videos: [
      {
        title: "Classic Trailer",
        url: "https://www.youtube.com/watch?v=Poo5lqoWSGw",
        type: "trailer"
      },
      {
        title: "Season 2 Trailer",
        url: "https://www.youtube.com/watch?v=78ngg0SRlEI",
        type: "trailer"
      },
      {
        title: "Best Fights",
        url: "https://www.youtube.com/watch?v=4AQdwNRNCRI",
        type: "preview"
      }
    ]
  },
  {
    id: 11,
    title: "Wolf Children",
    description: "After falling in love with a man who can transform into a wolf, Hana raises their two half-wolf, half-human children alone after his sudden death. Facing prejudice and the fear of discovery, she moves to the countryside to raise her unique children, Yuki and Ame, as they struggle to find their own path in the world and decide whether to live as humans or wolves.",
    genre: ["Slice of Life", "Fantasy", "Drama", "Family"],
    rating: 9.9,
    year: 2012,
    episodes: 1,
    image: "https://i.pinimg.com/736x/3d/d1/ec/3dd1eca30d745dd89e4e092064c7f17c.jpg",
    trailer: "https://www.youtube.com/watch?v=8xLji7WsW0w",
    videos: [
      {
        title: "Classic Trailer",
        url: "https://www.youtube.com/watch?v=8xLji7WsW0w",
        type: "trailer"
      },
      {
        title: "Mother Song ♥",
        url: "https://www.youtube.com/watch?v=Le9UEgEuc_Q",
        type: "trailer"
      },
      {
        title: "Funny and Cute Moments",
        url: "https://www.youtube.com/watch?v=QT7Jqn_tC2w",
        type: "preview"
      }
    ]
  },
  {
    id: 12,
    title: "Weathering with You",
    description: "A runaway high school boy, Hodaka, moves to Tokyo and befriends Hina, an orphaned girl who has the mysterious ability to control the weather and clear the sky. As they start a business offering sunny days for special occasions, they soon discover that her power comes with a great and tragic cost.",
    genre: ["Romance", "Fantasy", "Drama", "Supernatural"],
    rating: 9.0,
    year: 2019,
    episodes: 1,
    image: "https://i.pinimg.com/736x/ca/dc/3b/cadc3b72499e1f4cdc3daadd27e5da75.jpg",
    trailer: "https://www.youtube.com/watch?v=Q6iK6DjV_iE",
    videos: [
      {
        title: "Classic Trailer",
        url: "https://www.youtube.com/watch?v=Q6iK6DjV_iE",
        type: "trailer"
      },
      {
        title: "Grand Escape ♥",
        url: "https://www.youtube.com/watch?v=YAXTn0E-Zgo",
        type: "trailer"
      },
      {
        title: "I want you more than any blue sky",
        url: "https://www.youtube.com/watch?v=y0CZV9EZJ70",
        type: "preview"
      }
    ]
  },
  {
    id: 13,
    title: "Grave of the Fireflies",
    description: "In the final months of World War II, two siblings, Seita and his young sister Setsuko, struggle to survive in the aftermath of a firebombing that destroys their home and kills their mother. A devastatingly beautiful and heartbreaking tale of innocence lost, the brutal cost of war, and the unbreakable bond between a brother and sister.",
    genre: ["Drama", "Historical", "Tragedy"],
    rating: 9.9,
    year: 1988,
    episodes: 1,
    image: "https://i.pinimg.com/736x/f0/f2/b7/f0f2b7393ae9020390505187525c56c9.jpg",
    trailer: "https://www.youtube.com/watch?v=4vPeTSRd580",
    videos: [
      {
        title: "Classic Trailer",
        url: "https://www.youtube.com/watch?v=4vPeTSRd580",
        type: "trailer"
      },
      {
        title: "Main Theme",
        url: "https://www.youtube.com/watch?v=0QF_OEeUIOE",
        type: "trailer"
      },
      {
        title: "Seita and Setsuko ♥",
        url: "https://www.youtube.com/watch?v=R12yvIniLe4",
        type: "preview"
      }
    ]
  },
  {
    id: 14,
    title: "Re: Zero - Starting Life in Another World",
    description: "When Subaru Natsuki is suddenly summoned to a fantasy world, he thinks he's living the gamer's dream. But his newfound adventure turns into a nightmare when he discovers he has only one power: 'Return by Death,' a horrifying ability to loop back in time after each gruesome death. To protect the ones he loves, he must endure immense pain and suffering, dying again and again to get the future right.",
    genre: ["Fantasy", "Psychological Thriller", "Drama", "Isekai", "Suspense"],
    rating: 9.4,
    year: 2016,
    episodes: 50,
    image: "https://i.pinimg.com/1200x/77/84/dc/7784dcec6213e525d8d44f85e87397b8.jpg",
    trailer: "https://www.youtube.com/watch?v=65BiDF9YdGg",
    videos: [
      {
        title: "Classic Trailer",
        url: "https://www.youtube.com/watch?v=65BiDF9YdGg",
        type: "trailer"
      },
      {
        title: "Subaru's Speech - I hate myself",
        url: "https://www.youtube.com/watch?v=1zVh0p6FEdE",
        type: "trailer"
      },
      {
        title: "Rem's confession ♥",
        url: "https://www.youtube.com/watch?v=9sELPTA9vb8",
        type: "preview"
      }
    ]
  },
];

export const getAllGenres = (): string[] => {
  const genreSet = new Set<string>();
  animeRecommendations.forEach(anime => {
    anime.genre.forEach(g => genreSet.add(g));
  });
  return Array.from(genreSet).sort();
};