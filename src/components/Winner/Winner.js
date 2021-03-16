const Winner = ({ winner }) => {
    return (
        <h2 className="alert alert-success">
            {winner === 1 ? 'Player 1 Wins' :
                winner === 2 ? 'Player 2 Wins' : null }
        </h2>
    );
};

export default Winner;