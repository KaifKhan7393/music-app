import React, { useContext } from 'react'
import '../index.scss'
import { BsPlayFill } from 'react-icons/bs'
import SongContext from '../utils/SongContext'

const SongCard = ({ isbutton, isTitle, songData }) => {

    const setSongPath = useContext(SongContext);
    const songPath = () => {
        setSongPath.setSongSrc(songData.src);
    }

    return (
        <div className='songcard'>
            <div className="songImg" onClick={songPath}>
                <a href='#' className='link__overlay' />
                {isbutton &&
                    <div className="songPlay__btn">
                        <BsPlayFill />
                    </div>
                }
                <img src={songData.songImgsrc} alt={isTitle} className='song__Img' />
            </div>
            {isTitle &&
                <a href='#' className="song__name" onClick={songPath}>{songData.title}</a>
            }
            <p className='song__artist'>{songData.artist}</p>
        </div>
    )
}

export default SongCard