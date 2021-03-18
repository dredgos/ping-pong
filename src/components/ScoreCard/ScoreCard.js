const ScoreCard = ({score, p1Server, handleClick, player, name}) => {

    let server = p1Server ? 1 : 2;

    return (
        <div className="col-md-6 mt-4">
            <div className={`card text-center ${server === player ? " bg-dark text-white" : ""}`}>
                <h5 className="card-header">{ name }</h5>
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