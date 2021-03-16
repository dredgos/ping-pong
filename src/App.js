import Header from './components/Header'
import Reset from './components/Reset'
import Winner from './components/Winner';
import ScoreCard from "./components/ScoreCard";


const App = ({ player1, player2, handleP1, handleP2, reset, p1Server, winner }) => (
  <>
      {/* header */}
    <Header />

      {/* scores */}
        <div className="row mb-4">
            <ScoreCard 
                handleClick={ handleP1 } 
                score={ player1 } 
                playerName={'Player 1'}
                p1Server={p1Server}
            />
            <ScoreCard 
                handleClick={ handleP2 } 
                score={ player2 } 
                playerName={'Player 2'}
                p1Server={!p1Server}
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