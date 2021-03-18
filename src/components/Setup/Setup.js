import { useState } from 'react';


const Setup = ({ gameSetup, player1Name, player2Name, winningTotal, alternateServeNum }) => {

    let [p1Name, setP1Name] = useState("");
    let handleChangeP1Name = (e) => setP1Name(e.currentTarget.value)

    let [p2Name, setP2Name] = useState("");
    let handleChangeP2Name = (e) => setP2Name(e.currentTarget.value) 

    let [win, setWin] = useState(21);
    let winningScore = (e) => setWin(e.currentTarget.value)

    let [alternateServe, setAlternateServe] = useState(5);
    let changeServe = (e) => setAlternateServe(e.currentTarget.value)

    let handleSubmit = (e) => {

        const data = {
            p1Name: p1Name,
            p2Name: p2Name,
            win: win,
            alternateServe: alternateServe,
        }

        e.preventDefault();
        gameSetup(data);
    }

    return (

        <form onSubmit={ handleSubmit } className="form-group">
            <label className="mt-4" htmlFor="player1">Player 1</label>
            <input 
                value={player1Name} 
                onChange={handleChangeP1Name} 
                className="form-control" 
                name="player1" 
                id="player1" 
                type="text"
            />
            <label className="mt-4" htmlFor="player2">Player 2</label>
            <input 
                value={player2Name} 
                onChange={handleChangeP2Name} 
                className="form-control"
                name="player2" 
                id="player2" 
                type="text"
            />
            <label className="mt-4" htmlFor="winning">Winning Score</label>
            <input 
                value={win} 
                onChange={winningScore} 
                className="form-control" 
                name="winning" 
                id="winning" 
                type="number"
            />
            <label className="mt-4" htmlFor="alternate">Alternate Serve</label>
            <select 
                value={alternateServe} 
                onChange={changeServe} 
                className="form-control" 
                name="alternate" 
                id="alternate"
            >
                <option value="1">1</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="7">7</option>
            </select>
            <button 
                className="btn btn-primary mt-4"
                
            >Submit</button>
        </form>
    );
};

export default Setup;

