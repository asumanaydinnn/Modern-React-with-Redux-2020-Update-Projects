import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {
    "genre_ids": [
        10759,
        9648,
        18
    ],
    "first_air_date": "2021-09-17",
    "id": 93405,
    "poster_path": "/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    "backdrop_path": "/qw3J9cNeLioOLoR68WX7z79aCdK.jpg",
    "vote_average": 7.8,
    "original_name": "오징어 게임",
    "origin_country": [
        "KR"
    ],
    "vote_count": 9180,
    "overview": "Hundreds of cash-strapped players accept a strange invitation to compete in children's games—with high stakes. But, a tempting prize awaits the victor.",
    "name": "Squid Game",
    "original_language": "ko",
    "popularity": 1489.842,
    "media_type": "tv"
},
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
