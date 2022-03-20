export interface Album {
    id: number
    index: number
    image: string
    albumTitle: string
    artist: string
    releaseDate: string
    numTracks: number
    medium: string
    numCopies: number
    description: string
}

export interface AlbumProps {
    key: number
    id: number
    index: number
    image: string
    album?: Album
    albumTitle: string
    artist: string
    releaseDate: string
    numTracks: number
    medium: string
    numCopies: number
    description: string
    handleOnClickDelete: (id: number) => void
    handleOnClickCollection?: (album: Album, id: number) => void
}

export interface UserProfile {
    id: number,
    username: string,
    firstName: string,
    lastName: string,
    issuedAt: number,
    iat: number,
    exp: number
}

export interface SpotifyReturn {
    id: string
    images: {url: string}[]
    name: string
    artists: {name: string}[]
    release_date: string
    total_tracks: number
}

export interface SearchReturn {
    id: string
    image: string
    albumTitle: string
    artist: string
    release_date: string
    num_tracks: number
}

export interface Target {
    username: {value: string}
    password: {value: string}
    firstName?: {value: string}
    lastName?: {value: string}
}

export interface FormProps {
    image: string
    albumTitle: string
    artist: string
    releaseDate: string
    numTracks: number
}