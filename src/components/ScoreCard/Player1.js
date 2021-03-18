import { connect } from 'react-redux';
import ScoreCard from './ScoreCard';
import { increment } from '../../data/actions'

const mapStateToProps = (state) => {
    return {
        p1Server: state.p1Server,
        score: state.player1,
        name: state.p1Name
    };
};

const mapDispatchToProps = (dispatch, { player } ) => {
    return {
        handleClick: () => dispatch( increment(player) ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCard);