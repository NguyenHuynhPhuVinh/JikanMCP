/**
 * Các hằng số và endpoint URL cho Jikan API
 */

export const ENDPOINTS = {
  // Anime endpoints
  ANIME: '/anime',
  ANIME_BY_ID: '/anime/{id}',
  ANIME_FULL: '/anime/{id}/full',
  ANIME_CHARACTERS: '/anime/{id}/characters',
  ANIME_STAFF: '/anime/{id}/staff',
  ANIME_EPISODES: '/anime/{id}/episodes',
  ANIME_EPISODE: '/anime/{id}/episodes/{episode}',
  ANIME_NEWS: '/anime/{id}/news',
  ANIME_FORUM: '/anime/{id}/forum',
  ANIME_VIDEOS: '/anime/{id}/videos',
  ANIME_PICTURES: '/anime/{id}/pictures',
  ANIME_STATISTICS: '/anime/{id}/statistics',
  ANIME_RECOMMENDATIONS: '/anime/{id}/recommendations',
  ANIME_REVIEWS: '/anime/{id}/reviews',

  // Manga endpoints
  MANGA: '/manga',
  MANGA_BY_ID: '/manga/{id}',
  MANGA_FULL: '/manga/{id}/full',
  MANGA_CHARACTERS: '/manga/{id}/characters',
  MANGA_NEWS: '/manga/{id}/news',
  MANGA_FORUM: '/manga/{id}/forum',
  MANGA_PICTURES: '/manga/{id}/pictures',
  MANGA_STATISTICS: '/manga/{id}/statistics',
  MANGA_RECOMMENDATIONS: '/manga/{id}/recommendations',
  MANGA_REVIEWS: '/manga/{id}/reviews',

  // Character endpoints
  CHARACTER: '/characters',
  CHARACTER_BY_ID: '/characters/{id}',
  CHARACTER_FULL: '/characters/{id}/full',
  CHARACTER_ANIME: '/characters/{id}/anime',
  CHARACTER_MANGA: '/characters/{id}/manga',
  CHARACTER_PICTURES: '/characters/{id}/pictures',

  // People endpoints
  PERSON: '/people',
  PERSON_BY_ID: '/people/{id}',
  PERSON_FULL: '/people/{id}/full',
  PERSON_ANIME: '/people/{id}/anime',
  PERSON_MANGA: '/people/{id}/manga',
  PERSON_PICTURES: '/people/{id}/pictures',

  // Season endpoints
  SEASONS: '/seasons',
  SEASON: '/seasons/{year}/{season}',
  SEASON_NOW: '/seasons/now',
  SEASON_UPCOMING: '/seasons/upcoming',

  // Schedule endpoints
  SCHEDULES: '/schedules',
  
  // Top endpoints
  TOP_ANIME: '/top/anime',
  TOP_MANGA: '/top/manga',
  TOP_PEOPLE: '/top/people',
  TOP_CHARACTERS: '/top/characters',
  TOP_REVIEWS: '/top/reviews',

  // Genre endpoints
  GENRES_ANIME: '/genres/anime',
  GENRES_MANGA: '/genres/manga',

  // Producer endpoints
  PRODUCERS: '/producers',
  PRODUCER_BY_ID: '/producers/{id}',

  // Club endpoints
  CLUBS: '/clubs',
  CLUB_BY_ID: '/clubs/{id}',
  CLUB_MEMBERS: '/clubs/{id}/members',
  CLUB_STAFF: '/clubs/{id}/staff',
  CLUB_RELATIONS_ANIME: '/clubs/{id}/relations/anime',
  CLUB_RELATIONS_MANGA: '/clubs/{id}/relations/manga',

  // Review endpoints
  REVIEWS: '/reviews',
  REVIEWS_ANIME: '/reviews/anime',
  REVIEWS_MANGA: '/reviews/manga',
  REVIEW_ANIME_BY_ID: '/reviews/anime/{id}',
  REVIEW_MANGA_BY_ID: '/reviews/manga/{id}',

  // Watch endpoints
  WATCH: '/watch',
  WATCH_EPISODES: '/watch/episodes',
  WATCH_EPISODES_POPULAR: '/watch/episodes/popular',
  WATCH_PROMOS: '/watch/promos',
  WATCH_PROMOS_POPULAR: '/watch/promos/popular',

  // Random endpoints
  RANDOM_ANIME: '/random/anime',
  RANDOM_MANGA: '/random/manga',
  RANDOM_CHARACTER: '/random/characters',
  RANDOM_PERSON: '/random/people',
};

// Export cho sử dụng trong dự án
export const JIKAN_ENDPOINTS = ENDPOINTS;
