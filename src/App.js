import React from 'react';
import Header from './Components/Header/Header';
import SongsList from './Components/SongsList/SongsList';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      songs: [
        {
          id: 1,
          artist: 'Eminem',
          title: 'Godzilla'
        },
        {
          id: 2,
          artist: 'Roddy Ricch',
          title: 'The Box'
        }
      ]
    }
  }

  render() {
    return (
      <>
        <Header title="TOP CULTURE" />
        <SongsList songs={this.state.songs} />
      </>
    )
  }
}

export default App;
