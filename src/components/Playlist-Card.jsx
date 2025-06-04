import React, { useState } from 'react';
import classes from '../modules/Playlist-card.module.scss';
import playlistImg from '../assets/playlist-img.png';

const PlaylistCard = ({ playlist, onClick, isEditing, onStartEdit, onDoneEdit }) => {
    const [editedName, setEditedName] = useState(playlist.name);

    const handleChange = (e) => {
        setEditedName(e.target.value);
    };

    const handleDone = () => {
        onDoneEdit(playlist.id, editedName);
    };

    return (
        <div className={classes['single-playlist']} onClick={() => onClick(playlist)} style={{ cursor: 'pointer' }}>
            <div className={classes['single-image']}>
                <img src={playlist.image || playlistImg} alt='playlist' />
                <p>img</p>
            </div>
            <div className={classes['single-info']} onClick={e => e.stopPropagation()}>
                {isEditing ? (
                    <input
                        type="text"
                        value={editedName}
                        onChange={handleChange}
                        className={classes['edit-input']}
                        maxLength={20}
                    />
                ) : (
                    <h1>{playlist.name}</h1>
                )}
                <p>created with {playlist.friend}</p>
                <div className={classes['buttons']}>
                    <button onClick={e => e.stopPropagation() /* play logic here */}>Play</button>
                    {isEditing ? (
                        <button onClick={e => { e.stopPropagation(); handleDone(); }}>Done</button>
                    ) : (
                        <button onClick={e => { e.stopPropagation(); onStartEdit(playlist.id); }}>Edit</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PlaylistCard;
