import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './data/Store'

  // const state = store.getState();


  ReactDOM.render(
    <React.StrictMode>
      <Provider store={ store }>
        <App 
          // player1={ state.player1 } 
          // player2={ state.player2 }
          // p1Server={ state.p1Server }
          // winner={ state.winner }
          handleP1={ () => {store.dispatch({ type:"INCREMENTP1" })}}
          handleP2={ () => {store.dispatch({ type:"INCREMENTP2" })}}
          // handleScore={ () => store.dispatch({ type:"INCREMENT", player: player1})}
          // reset={ () => {store.dispatch({ type:"RESET" })}}
        />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
