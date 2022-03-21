import React from 'react';
import './styles/style.css';
import { useEffect } from 'react';

const SPOTIFY_CLIENT_ID = process.env;

function App() {

  useEffect(() => {
    console.log(SPOTIFY_CLIENT_ID);
    console.log(SPOTIFY_CLIENT_ID.REACT_APP_SPOTIFY_KEY)
  }, []);

  return (
    <React.Fragment>
      <div className="playlist-container">
        <h1>CREATE PLAYLIST</h1>
        <img src="images/spotify.png" alt="#" />
        <form>
          <label className="form-label" htmlFor="playlist-title">Playlist Title*</label>
          <br />
          <input
            type="text"
            className="input-title"
            id="playlist-title"
            defaultValue=""
            placeholder="Input your playlist title"
          />
          <br />
          <label className="form-label" htmlFor="playlist-desc">Description*</label>
          <br />
          <textarea
            type="text"
            className="input-desc"
            id="playlist-desc"
            defaultValue=""
            placeholder="Input the description"
          ></textarea>
          <input id="submit" className="submit-button" type="button" defaultValue="CREATE" />
        </form>
      </div>
      <div className="song-container">
        <img src="images/album.jpg" alt="#" />
        <h3 className="title">Death with Dignity</h3>
        <p className="artist">Sufjan Stevens</p>
        <p className="album">
          Album . Carrie & Lowell . 2021
        </p>
        <button className="button-play">Add to playlist</button>
      </div>
    </React.Fragment>
  );
}

export default App;
