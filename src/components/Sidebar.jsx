import React, { useState } from 'react'
import '../index.scss'
import { RxAvatar } from 'react-icons/rx';

const Sidebar = ({ isSidebar }) => {

    const [sidebar, setSidebar] = useState(isSidebar);

    return (
        <div className='sidebar' style={{ left: isSidebar ? '0' : '-100%' }}>
            <div className="sidebar__login">
                <RxAvatar style={{ fontSize: '3rem' }} />
                <a href="#">Login / Sign Up</a>
            </div>
            <div className="sidebar__lists">
                <a href="#">Home</a>
                <a href="#">Radio</a>
                <a href="#">Podcast</a>
                <a href="#">My Music</a>
                <a href="#">India's Music</a>
            </div>
        </div>
    )
}

export default Sidebar