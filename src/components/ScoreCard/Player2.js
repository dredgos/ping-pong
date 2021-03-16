import { connect } from 'react-redux';
import ScoreCard from './ScoreCard';

const mapStateToProps = (state) => {
    return {
        p1Server: state.p1Server,
        score: state.player2,
    }
}

export default connect(mapStateToProps)(ScoreCard);