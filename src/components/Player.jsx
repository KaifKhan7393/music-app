import React, { useContext } from 'react'
import '../index.scss'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import SongContext from '../utils/SongContext';


const Player = () => {

    const context = useContext(SongContext);
    const songPath = context.songSrc;

    return (
        songPath && <div className='player '>
            <div className="player__audio">
                <AudioPlayer
                    autoPlay
                    src={songPath}
                />
            </div>
        </div>
    )
}

export default Player