import Header from '../Header';
import Reset from '../Reset';
import Winner from '../Winner';
import Player1 from '../ScoreCard/Player1.js';
import Player2 from '../ScoreCard/Player2.js';
import Setup from '../Setup'



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