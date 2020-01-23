import React from 'react'
import Song from '../Song/Song'

const SongsList = props => {
    return (
        <div>
            {
                props.songs.map(song => (
                    <Song key={song.id} artist={song.artist} title={song.title} />
                ))
            }
        </div>
    )
}

export default SongsList;