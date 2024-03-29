import React, { useState, useEffect } from 'react';

const Demo = () => {
    const [playlists, setPlaylists] = useState([]);
    const accessToken = 'f1584756f2dd434ea815cb40ce352cb8'; // Replace with actual access token

    useEffect(() => {
        // Fetch user's playlists from Spotify API
        const fetchPlaylists = async () => {
            try {
                const response = await fetch('https://api.spotify.com/v1/me/playlists', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setPlaylists(data.items);
                } else {
                    console.error('Failed to fetch playlists:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching playlists:', error);
            }
        };

        fetchPlaylists();
    }, [accessToken]); // Include accessToken in the dependency array

    return (
        <div>
            <h1>My Playlists</h1>
            <ul>
                {playlists.map((playlist) => (
                    <li key={playlist.id}>{playlist.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Demo;
