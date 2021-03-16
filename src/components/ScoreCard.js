const ScoreCard = ({ p1Server, handleClick, score, playerName }) => {
    return (
        <div className="col-md-6 mt-4">
            <div className={`card text-center ${p1Server ? " bg-dark text-white" : ""}`}>
                <h5 className="card-header">{ playerName }</h5>
                <div className="card-body">
                    <p className="card-text display-1">{ score }</p>
                </div>
                <div className="card-footer">
                    <button onClick={ handleClick } className="form-control btn btn-success">+</button>
                </div>
            </div>
        </div>
    );
};

export default ScoreCard;