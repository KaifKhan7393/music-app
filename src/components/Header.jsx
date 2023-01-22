import { useState } from 'react';
import '../index.scss';
import { FiMenu } from 'react-icons/fi';
import Logo from '../assets/gaanalogo.png';
import { AiOutlineSearch } from 'react-icons/ai';
import Sidebar from './Sidebar';


function Header() {
    const [menubar, setMenubar] = useState(false);

    return (
        <>
            <Sidebar isSidebar={menubar} />
            <header className='header space'>
                <div className='nav'>
                    <FiMenu style={{ fontSize: '2rem', cursor: 'pointer' }} onClick={() => setMenubar(!menubar)} />
                    <a href="#" className='header__logo'>
                        <img src={Logo} alt="Gaana logo" />
                    </a>
                </div>
                <div className='header__searchBar'>
                    <form>
                        <AiOutlineSearch style={{ cursor: 'pointer', color: "#000" }} />
                        <input type="text" placeholder='Search Artists, Songs, Albums' />
                    </form>
                </div>
                {/* <div className="header__buttons desktop">
                    <a href="#" className="btn">Go Add Free</a>
                    <a href="#" className="btn">Get Gaana Plus</a>
                </div> */}
                <div className="header__loginBtns desktop">
                    <a href="#" >Login</a>/
                    <a href="#" >Signup</a>
                </div>
            </header>
        </>
    )
}

export default Header;