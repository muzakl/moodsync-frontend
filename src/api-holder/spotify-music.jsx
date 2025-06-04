import playlistImg from '../assets/playlist-img.png';

export const defaultPlaylists = [
    { id: 1, name: 'Chill Vibes', friend: 'Anna', image: playlistImg },
    { id: 2, name: 'Workout Mix', friend: 'Luka', image: playlistImg },
    { id: 3, name: 'Party Hits', friend: 'Nino', image: playlistImg },
];

export const mockSongs = (playlistImage = playlistImg) => [
    { name: "Dream Escape", artist: "Aurora Sky", duration: "2:32", img: playlistImage },
    { name: "Waves of You", artist: "Echo Heart", duration: "3:45", img: playlistImage },
    { name: "Late Night Ride", artist: "Neon Bloom", duration: "4:01", img: playlistImage },
    { name: "Electric Flow", artist: "Synth Noir", duration: "3:20", img: playlistImage },
    { name: "Golden Hour", artist: "Velvet Dusk", duration: "2:58", img: playlistImage },
];
