import type { APIRoute } from 'astro';
import { searchSpotifySongs, formatSongData } from '../../lib/spotify';

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get('q');
  
  if (!query) {
    return new Response(JSON.stringify({ error: 'Missing query parameter' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  
  try {
    const songs = await searchSpotifySongs(query);
    const formattedSongs = songs.map(formatSongData);
    
    return new Response(JSON.stringify({ songs: formattedSongs }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error searching Spotify:', error);
    return new Response(JSON.stringify({ error: 'Failed to search Spotify' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}