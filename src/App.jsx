import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import SongBanner from './components/SongBanner';
import Songs from './components/Songs';
import Artists from './components/Artists';
import Player from './components/Player';
import Footer from './components/Footer';
import { musicsList } from './firebase';
import SongState from './utils/SongState';

function App() {

  const [trendingSongs, setTrendingSongs] = useState([]);
  const [popularSongs, setPopularSongs] = useState([]);

  useEffect(() => {
    musicsList.map((music) => {
      if (music.category === 'trending') {
        setTrendingSongs((prev) => [...prev, music]);
      }
      if (music.category === 'Popular Hindi') {
        setPopularSongs((prev) => [...prev, music]);
      }
    })
  }, []);


  // console.log(trendingSongs);
  // console.log(popularSongs);


  return (
    <SongState>
      <div className='App'>
        <Header />
        <Categories />
        <SongBanner />
        <Songs title='Trending Songs' SongsData={trendingSongs} />
        {/* <Songs title='New Releases' /> */}
        {/* <Songs title='Top Playlists' /> */}
        <Songs title='Popular In Hindi' SongsData={popularSongs} />
        {/* <Songs title='Romance' /> */}
        {/* <Artists /> */}
        {/* <Songs title='Gaana Recommends' />
      <Songs title='Star Gallery' /> */}
        {/* <Player songPath={songSrc} /> */}
        <Player />
        <Footer />
      </div>
    </SongState>
  )
}

export default App; 