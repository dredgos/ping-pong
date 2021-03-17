import { connect } from 'react-redux';
import ScoreCard from './ScoreCard';
import { incrementP2 } from '../../data/actions'

const mapStateToProps = (state) => {
    return {
        p1Server: state.p1Server,
        score: state.player2,
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => dispatch( incrementP2() ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreCard);