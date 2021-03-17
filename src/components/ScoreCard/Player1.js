import { connect } from 'react-redux';
import ScoreCard from './ScoreCard';
import { incrementP1 } from '../../data/actions'

const mapStateToProps = (state) => {
    return {
        p1Server: state.p1Server,
        score: state.player1,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => dispatch( incrementP1() ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCard);