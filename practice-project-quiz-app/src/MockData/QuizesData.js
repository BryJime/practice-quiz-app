

const QuizesData = [
  // =====================
  // HISTORY (10)
  // =====================
  {
    "id": 1,
    "category": "History",
    "question": "Who was the first President of the United States?",
    "options": ["George Washington", "Thomas Jefferson", "John Adams", "James Madison"],
    "answer": "George Washington"
  },
  {
    "id": 2,
    "category": "History",
    "question": "In which year did World War II end?",
    "options": ["1943", "1945", "1947", "1950"],
    "answer": "1945"
  },
  {
    "id": 3,
    "category": "History",
    "question": "Which ancient civilization built the pyramids?",
    "options": ["Romans", "Greeks", "Egyptians", "Mayans"],
    "answer": "Egyptians"
  },
  {
    "id": 4,
    "category": "History",
    "question": "The Cold War was primarily between which two nations?",
    "options": ["USA and China", "USA and USSR", "UK and Germany", "France and Spain"],
    "answer": "USA and USSR"
  },
  {
    "id": 5,
    "category": "History",
    "question": "Who was known as the first Emperor of Rome?",
    "options": ["Julius Caesar", "Augustus", "Nero", "Caligula"],
    "answer": "Augustus"
  },
  {
    "id": 6,
    "category": "History",
    "question": "What wall fell in 1989?",
    "options": ["Great Wall", "Iron Curtain", "Berlin Wall", "Western Wall"],
    "answer": "Berlin Wall"
  },
  {
    "id": 7,
    "category": "History",
    "question": "Which war was fought between the North and South regions in the U.S.?",
    "options": ["Revolutionary War", "Civil War", "World War I", "Vietnam War"],
    "answer": "Civil War"
  },
  {
    "id": 8,
    "category": "History",
    "question": "Who discovered America in 1492?",
    "options": ["Marco Polo", "Leif Erikson", "Christopher Columbus", "Amerigo Vespucci"],
    "answer": "Christopher Columbus"
  },
  {
    "id": 9,
    "category": "History",
    "question": "Which empire was ruled by Genghis Khan?",
    "options": ["Roman Empire", "Ottoman Empire", "Mongol Empire", "Persian Empire"],
    "answer": "Mongol Empire"
  },
  {
    "id": 10,
    "category": "History",
    "question": "The Renaissance began in which country?",
    "options": ["France", "England", "Italy", "Spain"],
    "answer": "Italy"
  },

  // =====================
  // SCIENCE (10)
  // =====================
  {
    "id": 11,
    "category": "Science",
    "question": "What planet is known as the Red Planet?",
    "options": ["Venus", "Mars", "Jupiter", "Saturn"],
    "answer": "Mars"
  },
  {
    "id": 12,
    "category": "Science",
    "question": "What gas do humans need to breathe to survive?",
    "options": ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"],
    "answer": "Oxygen"
  },
  {
    "id": 13,
    "category": "Science",
    "question": "What is H2O commonly known as?",
    "options": ["Salt", "Oxygen", "Water", "Hydrogen"],
    "answer": "Water"
  },
  {
    "id": 14,
    "category": "Science",
    "question": "How many planets are in our solar system?",
    "options": ["7", "8", "9", "10"],
    "answer": "8"
  },
  {
    "id": 15,
    "category": "Science",
    "question": "What force keeps us on the ground?",
    "options": ["Magnetism", "Gravity", "Friction", "Inertia"],
    "answer": "Gravity"
  },
  {
    "id": 16,
    "category": "Science",
    "question": "Which organ pumps blood through the body?",
    "options": ["Lungs", "Brain", "Heart", "Liver"],
    "answer": "Heart"
  },
  {
    "id": 17,
    "category": "Science",
    "question": "What part of the cell contains DNA?",
    "options": ["Cytoplasm", "Nucleus", "Membrane", "Ribosome"],
    "answer": "Nucleus"
  },
  {
    "id": 18,
    "category": "Science",
    "question": "What is the boiling point of water (Celsius)?",
    "options": ["90", "95", "100", "110"],
    "answer": "100"
  },
  {
    "id": 19,
    "category": "Science",
    "question": "What type of energy comes from the sun?",
    "options": ["Thermal", "Solar", "Nuclear", "Chemical"],
    "answer": "Solar"
  },
  {
    "id": 20,
    "category": "Science",
    "question": "Which metal is liquid at room temperature?",
    "options": ["Iron", "Gold", "Mercury", "Aluminum"],
    "answer": "Mercury"
  },

  // =====================
  // MOVIES (10)
  // =====================
  {
    "id": 21,
    "category": "Movies",
    "question": "Who directed the movie 'Jaws'?",
    "options": ["George Lucas", "Steven Spielberg", "James Cameron", "Ridley Scott"],
    "answer": "Steven Spielberg"
  },
  {
    "id": 22,
    "category": "Movies",
    "question": "Which movie features the character Darth Vader?",
    "options": ["Star Trek", "Star Wars", "Avatar", "Alien"],
    "answer": "Star Wars"
  },
  {
    "id": 23,
    "category": "Movies",
    "question": "What year was the original Jurassic Park released?",
    "options": ["1991", "1993", "1995", "1997"],
    "answer": "1993"
  },
  {
    "id": 24,
    "category": "Movies",
    "question": "Which actor played Iron Man?",
    "options": ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
    "answer": "Robert Downey Jr."
  },
  {
    "id": 25,
    "category": "Movies",
    "question": "What movie won Best Picture in 1994?",
    "options": ["Pulp Fiction", "Forrest Gump", "The Shawshank Redemption", "Speed"],
    "answer": "Forrest Gump"
  },
  {
    "id": 26,
    "category": "Movies",
    "question": "Which movie features a DeLorean time machine?",
    "options": ["The Matrix", "Back to the Future", "Blade Runner", "Terminator"],
    "answer": "Back to the Future"
  },
  {
    "id": 27,
    "category": "Movies",
    "question": "Who played Jack in Titanic?",
    "options": ["Brad Pitt", "Leonardo DiCaprio", "Matt Damon", "Johnny Depp"],
    "answer": "Leonardo DiCaprio"
  },
  {
    "id": 28,
    "category": "Movies",
    "question": "Which movie is about dreams within dreams?",
    "options": ["Inception", "Interstellar", "Tenet", "Memento"],
    "answer": "Inception"
  },
  {
    "id": 29,
    "category": "Movies",
    "question": "Which animated movie features the song 'Let It Go'?",
    "options": ["Moana", "Frozen", "Tangled", "Coco"],
    "answer": "Frozen"
  },
  {
    "id": 30,
    "category": "Movies",
    "question": "What genre is the movie Alien?",
    "options": ["Comedy", "Drama", "Horror", "Romance"],
    "answer": "Horror"
  },

  // =====================
  // SPORTS (10)
  // =====================
  {
    "id": 31,
    "category": "Sports",
    "question": "How many points is a touchdown worth?",
    "options": ["3", "6", "7", "8"],
    "answer": "6"
  },
  {
    "id": 32,
    "category": "Sports",
    "question": "Which sport uses a puck?",
    "options": ["Basketball", "Hockey", "Soccer", "Baseball"],
    "answer": "Hockey"
  },
  {
    "id": 33,
    "category": "Sports",
    "question": "How many players are on a basketball court per team?",
    "options": ["4", "5", "6", "7"],
    "answer": "5"
  },
  {
    "id": 34,
    "category": "Sports",
    "question": "Which country hosted the 2016 Summer Olympics?",
    "options": ["China", "Brazil", "UK", "Japan"],
    "answer": "Brazil"
  },
  {
    "id": 35,
    "category": "Sports",
    "question": "What sport is Serena Williams famous for?",
    "options": ["Golf", "Tennis", "Soccer", "Track"],
    "answer": "Tennis"
  },
  {
    "id": 36,
    "category": "Sports",
    "question": "What is the maximum score in a single frame of bowling?",
    "options": ["20", "30", "40", "50"],
    "answer": "30"
  },
  {
    "id": 37,
    "category": "Sports",
    "question": "Which sport has positions called pitcher and catcher?",
    "options": ["Cricket", "Baseball", "Softball", "Both B and C"],
    "answer": "Both B and C"
  },
  {
    "id": 38,
    "category": "Sports",
    "question": "How long is a standard soccer match?",
    "options": ["60 minutes", "70 minutes", "90 minutes", "120 minutes"],
    "answer": "90 minutes"
  },
  {
    "id": 39,
    "category": "Sports",
    "question": "Which sport is associated with Wimbledon?",
    "options": ["Cricket", "Golf", "Tennis", "Rugby"],
    "answer": "Tennis"
  },
  {
    "id": 40,
    "category": "Sports",
    "question": "What ball is used in American football?",
    "options": ["Round", "Oval", "Square", "Flat"],
    "answer": "Oval"
  },

  // =====================
  // TELEVISION (10)
  // =====================
  {
    "id": 41,
    "category": "Television",
    "question": "Which TV show features the character Walter White?",
    "options": ["The Wire", "Breaking Bad", "Better Call Saul", "Ozark"],
    "answer": "Breaking Bad"
  },
  {
    "id": 42,
    "category": "Television",
    "question": "What animated show features Homer Simpson?",
    "options": ["Family Guy", "The Simpsons", "Futurama", "South Park"],
    "answer": "The Simpsons"
  },
  {
    "id": 43,
    "category": "Television",
    "question": "Which show takes place in the fictional land of Westeros?",
    "options": ["The Witcher", "Game of Thrones", "Vikings", "Rome"],
    "answer": "Game of Thrones"
  },
  {
    "id": 44,
    "category": "Television",
    "question": "What TV show is about a group of friends in New York City?",
    "options": ["Seinfeld", "Friends", "How I Met Your Mother", "All of the above"],
    "answer": "All of the above"
  },
  {
    "id": 45,
    "category": "Television",
    "question": "Which show features the character Michael Scott?",
    "options": ["Parks and Rec", "The Office", "Brooklyn Nine-Nine", "Scrubs"],
    "answer": "The Office"
  },
  {
    "id": 46,
    "category": "Television",
    "question": "What network aired 'Stranger Things'?",
    "options": ["HBO", "Netflix", "AMC", "FOX"],
    "answer": "Netflix"
  },
  {
    "id": 47,
    "category": "Television",
    "question": "Which show involves survivors of a zombie apocalypse?",
    "options": ["Lost", "The Walking Dead", "Dark", "The Leftovers"],
    "answer": "The Walking Dead"
  },
  {
    "id": 48,
    "category": "Television",
    "question": "What show is set in a paper company office?",
    "options": ["The Office", "Mad Men", "Suits", "Silicon Valley"],
    "answer": "The Office"
  },
  {
    "id": 49,
    "category": "Television",
    "question": "Which show stars Sheldon Cooper?",
    "options": ["Friends", "The Big Bang Theory", "Community", "Scrubs"],
    "answer": "The Big Bang Theory"
  },
  {
    "id": 50,
    "category": "Television",
    "question": "Which TV genre is 'Jeopardy!'?",
    "options": ["Drama", "Sitcom", "Game Show", "Reality"],
    "answer": "Game Show"
  },

  // =====================
  // GAMING (10)
  // =====================
  {
    "id": 51,
    "category": "Gaming",
    "question": "Which company created Mario?",
    "options": ["Sony", "Microsoft", "Nintendo", "Sega"],
    "answer": "Nintendo"
  },
  {
    "id": 52,
    "category": "Gaming",
    "question": "What is the best-selling video game of all time?",
    "options": ["Tetris", "Minecraft", "GTA V", "Skyrim"],
    "answer": "Minecraft"
  },
  {
    "id": 53,
    "category": "Gaming",
    "question": "Which console is made by Sony?",
    "options": ["Xbox", "PlayStation", "Switch", "GameCube"],
    "answer": "PlayStation"
  },
  {
    "id": 54,
    "category": "Gaming",
    "question": "What genre is Call of Duty?",
    "options": ["RPG", "Strategy", "First-Person Shooter", "Simulation"],
    "answer": "First-Person Shooter"
  },
  {
    "id": 55,
    "category": "Gaming",
    "question": "Which game features the character Master Chief?",
    "options": ["Destiny", "Halo", "Mass Effect", "Doom"],
    "answer": "Halo"
  },
  {
    "id": 56,
    "category": "Gaming",
    "question": "What company developed Fortnite?",
    "options": ["Valve", "Epic Games", "Ubisoft", "EA"],
    "answer": "Epic Games"
  },
  {
    "id": 57,
    "category": "Gaming",
    "question": "Which game involves catching Pokémon?",
    "options": ["Digimon", "Pokémon", "Zelda", "Metroid"],
    "answer": "Pokémon"
  },
  {
    "id": 58,
    "category": "Gaming",
    "question": "What is an RPG?",
    "options": ["Role-Playing Game", "Real-Time Game", "Random Play Game", "Rapid Power Game"],
    "answer": "Role-Playing Game"
  },
  {
    "id": 59,
    "category": "Gaming",
    "question": "Which game uses creepers?",
    "options": ["Terraria", "Minecraft", "Roblox", "Rust"],
    "answer": "Minecraft"
  },
  {
    "id": 60,
    "category": "Gaming",
    "question": "Which console is portable?",
    "options": ["PS5", "Xbox Series X", "Nintendo Switch", "PS4"],
    "answer": "Nintendo Switch"
  },

  // =====================
  // GEOGRAPHY (10)
  // =====================
  {
    "id": 61,
    "category": "Geography",
    "question": "What is the largest continent?",
    "options": ["Africa", "Asia", "Europe", "North America"],
    "answer": "Asia"
  },
  {
    "id": 62,
    "category": "Geography",
    "question": "Which country has the largest population?",
    "options": ["India", "China", "USA", "Russia"],
    "answer": "India"
  },
  {
    "id": 63,
    "category": "Geography",
    "question": "What is the capital of France?",
    "options": ["Berlin", "Madrid", "Paris", "Rome"],
    "answer": "Paris"
  },
  {
    "id": 64,
    "category": "Geography",
    "question": "Which ocean is the largest?",
    "options": ["Atlantic", "Indian", "Arctic", "Pacific"],
    "answer": "Pacific"
  },
  {
    "id": 65,
    "category": "Geography",
    "question": "Mount Everest is located in which mountain range?",
    "options": ["Andes", "Rockies", "Himalayas", "Alps"],
    "answer": "Himalayas"
  },
  {
    "id": 66,
    "category": "Geography",
    "question": "Which country is known as the Land of the Rising Sun?",
    "options": ["China", "Japan", "South Korea", "Thailand"],
    "answer": "Japan"
  },
  {
    "id": 67,
    "category": "Geography",
    "question": "What river runs through Egypt?",
    "options": ["Amazon", "Nile", "Danube", "Tigris"],
    "answer": "Nile"
  },
  {
    "id": 68,
    "category": "Geography",
    "question": "Which U.S. state is the largest by area?",
    "options": ["Texas", "California", "Alaska", "Montana"],
    "answer": "Alaska"
  },
  {
    "id": 69,
    "category": "Geography",
    "question": "Which desert is the largest hot desert?",
    "options": ["Gobi", "Kalahari", "Sahara", "Arabian"],
    "answer": "Sahara"
  },
  {
    "id": 70,
    "category": "Geography",
    "question": "What is the capital of Canada?",
    "options": ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    "answer": "Ottawa"
  }
]

export default QuizesData;