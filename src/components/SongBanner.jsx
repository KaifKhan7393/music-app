import React, { useRef, useEffect } from 'react'
import '../index.scss'
import SongBannerCard from './SongBannerCard'

const SongBanner = () => {

    const bannerSlider = useRef(null);

    // useEffect(() => {
    //     setTimeout(() => {
    //         bannerSlider.current.scrollLeft += 300;
    //     }, 1000);
    // }, [4]);

    return (
        <div className='songbanner' ref={bannerSlider}>
            <SongBannerCard src="https://a10.gaanacdn.com/gn_img/showcase/qaLKY23pO4/qaLKYowWpO/size_s_1670584793.webp" />
            <SongBannerCard src="https://a10.gaanacdn.com/gn_img/showcase/XzVWRLKdqR/zVWRJ71Wdq/size_l_1670571880.webp" />
            <SongBannerCard src="https://a10.gaanacdn.com/gn_img/showcase/2lV3dl13Rg/lV3d5AOWRg/size_l_1639481332.webp" />
            <SongBannerCard src="https://a10.gaanacdn.com/gn_img/showcase/81l3Mye3rM/1l3MmZG3rM/size_l_1646422960.webp" />
            <SongBannerCard src="https://a10.gaanacdn.com/gn_img/showcase/qaLKY23pO4/qaLKYowWpO/size_l_1670584793.webp" />
            <SongBannerCard src="https://a10.gaanacdn.com/gn_img/showcase/ZaP374RWDy/ZaP372BKDy/size_l_1641541612.webp" />
            <SongBannerCard src="https://a10.gaanacdn.com/gn_img/showcase/4Z9bqZoKyQ/Z9bq55XbyQ/size_l_1671194739.webp" />

        </div>
    )
}

export default SongBanner