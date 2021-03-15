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
};


const scoreP1 = (state) => {
  return {...state, 
    player1: state.player1 + 1,
  }
}

const scoreP2 = (state) => {
  return {...state, 
    player2: state.player2 + 1,
  }
}

const setServer = (state) => {
  let total = state.player1 + state.player2;
  if (total % 5 === 0) {
    return {
      ...state,
      p1Server: !state.p1Server
    } 
  } else {
    return state;
  }

}


const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENTP1": return setServer(scoreP1(state))
    case "INCREMENTP2": return setServer(scoreP2(state))
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
        handleP1={ () => {store.dispatch({ type:"INCREMENTP1" })}}
        handleP2={ () => {store.dispatch({ type:"INCREMENTP2" })}}
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
