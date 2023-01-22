import React from 'react'
import { BsPlayFill } from 'react-icons/bs'

const ArtistCard = ({ isbutton, src, isTitle }) => {
    return (
        <div className='songcard artist__card'>
            <div className="songImg artistImg">
                <a href="#" className='link__overlay'></a>
                {isbutton &&
                    <div className="songPlay__btn">
                        <BsPlayFill />
                    </div>
                }

                <img src={src} alt={isTitle} className='song__Img artist__img' />
            </div>
            {isTitle &&
                <a href='#' className="song__name artist__name">{isTitle}</a>
            }


        </div>
    )
}

export default ArtistCard