import { gameStart } from './state';
import axios from '../../axiosConfig'

export const postGame = (data) => {
    return dispatch => {
        axios.post("/games", {
            player_1: data.p1Name,
            player_2: data.p2Name,
            winning_score: data.win,
            change_serve: data.alternateServe,
        }).then(({ data }) => {
            dispatch(gameStart(data.data))
        }) 
    }
}