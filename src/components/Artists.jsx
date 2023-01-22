import React from 'react'
import '../index.scss'
import ArtistCard from './ArtistCard'

const Artists = ({ isbutton, src, isTitle }) => {
    return (
        <div className='artists songs'>
            <h2 className='artists__title'>Top Searched Artists</h2>
            <div className="artists__cards songs__lists">
                <ArtistCard isbutton={true} src="https://a10.gaanacdn.com/gn_img/artists/Dk9KNk23Bx/k9KNqJJbBx/size_m_1638898900.webp" isTitle={"Arijit"} />
                <ArtistCard isbutton={true} src="https://a10.gaanacdn.com/gn_img/artists/2lV3dl13Rg/lV3d5AOWRg/size_m_1639481332.webp" isTitle={"Armaan Malik"} />
                <ArtistCard isbutton={true} src="https://a10.gaanacdn.com/gn_img/artists/81l3Mye3rM/1l3MmZG3rM/size_m_1646422960.webp" isTitle={"Atif Aslam"} />
                <ArtistCard isbutton={true} src="https://a10.gaanacdn.com/gn_img/artists/ZaP374RWDy/ZaP372BKDy/size_m_1641541612.webp" isTitle={"Badshah"} />
                <ArtistCard isbutton={true} src="https://a10.gaanacdn.com/gn_img/artists/2lV3dl13Rg/lV3d5AOWRg/size_m_1639481332.webp" isTitle={"Armaan Malik"} />
                <ArtistCard isbutton={true} src="https://a10.gaanacdn.com/gn_img/artists/81l3Mye3rM/1l3MmZG3rM/size_m_1646422960.webp" isTitle={"Atif Aslam"} />
                <ArtistCard isbutton={true} src="https://a10.gaanacdn.com/gn_img/artists/ZaP374RWDy/ZaP372BKDy/size_m_1641541612.webp" isTitle={"Badshah"} />
            </div>
        </div>
    )
}

export default Artists