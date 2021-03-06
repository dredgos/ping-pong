import initial from './Initial';



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

  const startGame = (state, {payload}) => {

    const { player_1, player_2, winning_score, change_serve } = payload
  
    return {
      ...state,
      gameSetup: true,
      p1Name: player_1.name,
      p2Name: player_2.name,
      win: winning_score,
      alternateServe: change_serve,      
    }
  }

  const reset = (state) => {
    return {
      ...initial,
      p1Name: state.p1Name,
      p2Name: state.p2Name,
      win: state.win,
      alternateServe: state.alternateServe
    }
  }
  
  
const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENTP1": return setServer(scoreP1(state));
      case "INCREMENTP2": return setServer(scoreP2(state));
      // case "INCREMENT" : return setServer(scored(state, action));
      case "RESET": return reset(state);
      case "START": return startGame(state, action);

  
      default: return initial;
    } 
  }

  export default reducer;
