import axios from 'axios';
import { SpotifyReturn } from './interfaces';

const clientId = process.env.REACT_APP_CLIENT_ID;
const redirectUri = process.env.REACT_APP_REDIRECT_URI;

let accessToken: string;

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        // check for access token match
        const accessTokenMatch: RegExpMatchArray | null = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch: RegExpMatchArray | null = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn: number = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', '', '/');
            return accessToken;
        } else {
            const accessUrl: string = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`
            window.location = accessUrl as unknown as Location;
        }
    },

    search(term: string) {
        const accessToken = Spotify.getAccessToken();
        return axios
            .get(`https://api.spotify.com/v1/search?type=album&q=${term}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            .then((response) => {
                console.log(response);
                if (!response.data.albums) {
                    return [];
                }
                return response.data.albums.items.map((album: SpotifyReturn)  => ({
                    id: album.id,
                    image: album.images[1].url,
                    albumTitle: album.name,
                    artist: album.artists[0].name,
                    release_date: album.release_date,
                    num_tracks: album.total_tracks
                }))
            })
    }
}

export default Spotify;
