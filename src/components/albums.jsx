import React from "react"

const Album = (albumData) => {
    const album = albumData.value;
    return (
        <React.Fragment>
            <div className="song-container">
                <img src={album.album.images[0].url} alt="#" />
                <h3 className="title">{album.name}</h3>
                <p className="artist">{album.artists[0].name}</p>
                <p className="album">
                   {album.album.name}
                </p>
                <p className="year"> {album.album.release_date.slice(0,4)}</p>
                <button className="button-play">Select</button>
            </div>
        </React.Fragment>
    )
}

export default Album