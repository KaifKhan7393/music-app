import React from 'react'
import '../index.scss'
import SongCard from './SongCard'

const Songs = ({ title, SongsData }) => {

    return (
        <div className="songs">
            <h2>{title}</h2>
            <div className="songs__lists">
                {SongsData.map((song, idx) => (
                    <SongCard
                        key={idx}
                        songData={song}
                        isbutton='true'
                        isTitle='true'
                    />
                ))}
            </div>
        </div>
    )
}

export default Songs