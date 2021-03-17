import Header from './components/Header';
import Reset from './components/Reset';
import Winner from './components/Winner';
import Player1 from './components/ScoreCard/Player1.js';
import Player2 from './components/ScoreCard/Player2.js';
import Setup from './components/Setup'



const App = ({ gameSetup }) => (
  <>
    <Header />
      {gameSetup ?
      <>     
        <div className="row mb-4"> 
          <Player1 player={1}/>
          <Player2 player={2}/>
        </div>

        <Winner />

        <hr />
        <Reset />
      </> :

    <Setup />}
  </>
);

export default App;