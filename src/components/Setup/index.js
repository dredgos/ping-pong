import { connect } from 'react-redux';
import Setup from './Setup';
import { gameStart } from '../../data/actions'


const mapStateToProps = (state) => {
    return {
        gameSetup: state.gameSetup
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        gameSetup: (p1Name, p2Name, win, alternateServe) => dispatch((gameStart(p1Name, p2Name, win, alternateServe)))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Setup);