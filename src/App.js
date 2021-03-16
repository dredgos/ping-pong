import Header from './components/Header'
import Reset from './components/Reset'
import Winner from './components/Winner/';
import Player1 from './components/ScoreCard/Player1.js';
import Player2 from './components/ScoreCard/Player2.js';



const App = ({  handleP1, handleP2, reset, winner }) => (
  <>
      {/* header */}
    <Header />

      {/* scores */}
        <div className="row mb-4">
          <Player1 
              handleClick={ handleP1 } 
              player={1}
          />
        <Player2 
            handleClick={ handleP2 } 
            player={2}
          />
        </div>


      { /* winner message */}
        <Winner winner={winner}/>

      <hr />

      { /* reset button */}
      <Reset reset={reset}/>
  </>
);

export default App;