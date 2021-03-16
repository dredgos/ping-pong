import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';


const initial = {
  player1: 0,
  player2: 0,
  p1Server: true,
  winner: 0,
};

const win = 21;

// const scored = (state, {player}) => {
//   if (state[player] + 1 === win) {
//     return {...state, 
//       [player]: state[player] + 1,
//       winner: 1,  
//     } 
//   } else {
//     return {...state, 
//       [player]: state[player] + 1,
//       winner: 0, 
//     } 
//   }
// }

const scoreP1 = (state) => {
  if (state.player1 + 1 === win) {
    return {...state, 
      player1: state.player1 + 1,
      winner: 1,  
    } 
  } else {
    return {...state, 
      player1: state.player1 + 1,
      winner: 0, 
    } 
  }
}

const scoreP2 = (state) => {
  if (state.player2 + 1 === win) {
    return {...state, 
      player2: state.player2 + 1,
      winner: 2,        
    } 
  } else {
    return {...state, 
      player2: state.player2 + 1, 
      winner: 0, 
    } 
  }
}

const setServer = (state) => {
  let total = state.player1 + state.player2;
  if (total % 5 === 0) {
    return {
      ...state,
      p1Server: !state.p1Server,
    } 
  } else {
    return state;
  }

}


const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENTP1": return setServer(scoreP1(state));
    case "INCREMENTP2": return setServer(scoreP2(state));
    // case "INCREMENT" : return setServer(scored(state, action));
    case "RESET": return initial;

    default: return initial;
  } 
}

const store = createStore(
  reducer, 
  initial,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )

const render = () => {
  const state = store.getState();


  ReactDOM.render(
    <React.StrictMode>
      <App 
        player1={ state.player1 } 
        player2={ state.player2 }
        p1Server={ state.p1Server }
        winner={ state.winner }
        handleP1={ () => {store.dispatch({ type:"INCREMENTP1" })}}
        handleP2={ () => {store.dispatch({ type:"INCREMENTP2" })}}
        // handleScore={ () => store.dispatch({ type:"INCREMENT", player: player1})}
        reset={ () => {store.dispatch({ type:"RESET" })}}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
