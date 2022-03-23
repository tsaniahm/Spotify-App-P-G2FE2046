import React, {useEffect} from 'react';
import './styles/style.css';
import Album from './components/albums';
import data from './albumData/dataDummy';
import CreatePlaylistForm from './components/createPlaylistForm';

const SPOTIFY_CLIENT_ID = process.env;

function App() {

  useEffect(() => {
    console.log(SPOTIFY_CLIENT_ID);
    console.log(SPOTIFY_CLIENT_ID.REACT_APP_SPOTIFY_KEY)
  }, []);

  return (
    <React.Fragment>
      <CreatePlaylistForm />
      <Album value={data}/>
    </React.Fragment>
  );
}

export default App;
