const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';
const SPOTIFY_SEARCH_URL = 'https://api.spotify.com/v1/search';

// These should be environment variables
const SPOTIFY_CLIENT_ID = '61946024916341d2845a9c9168e1d219';
const SPOTIFY_CLIENT_SECRET = '7b8b8ab457cc461497715a65e20007fe';

let accessToken: string | null = null;
let tokenExpirationTime: number = 0;

async function getSpotifyAccessToken(): Promise<string> {
  // Check if we have a valid token
  if (accessToken && Date.now() < tokenExpirationTime) {
    return accessToken;
  }

  // Get a new token
  const authString = btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`);
  
  const response = await fetch(SPOTIFY_TOKEN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + authString
    },
    body: 'grant_type=client_credentials'
  });

  const data = await response.json();
  accessToken = data.access_token;
  tokenExpirationTime = Date.now() + (data.expires_in * 1000);
  
  return accessToken;
}

export async function searchSpotifySongs(query: string) {
  const token = await getSpotifyAccessToken();
  
  const response = await fetch(`${SPOTIFY_SEARCH_URL}?q=${encodeURIComponent(query)}&type=track&limit=5`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  const data = await response.json();
  return data.tracks.items;
}

export function formatSongData(song: any) {
  return {
    id: song.id,
    name: song.name,
    artist: song.artists.map((a: any) => a.name).join(', '),
    albumImg: song.album.images[2]?.url || '',
    previewUrl: song.preview_url
  };
}