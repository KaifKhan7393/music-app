import React from 'react'
import '../index.scss'

const SongBannerCard = ({ src }) => {
    return (
        <div className='songCard__banner'>
            <div className="songImg__banner">
                <a href="#" className='link__overlay'></a>
                <img src={src} alt='Songs' className='song__bannerImg' />
            </div>
        </div>
    )
}


export default SongBannerCard