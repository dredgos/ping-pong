import { connect } from 'react-redux';
import Setup from './Setup';
import { gameStart } from '../../data/actions'


const mapStateToProps = (state) => {
    return {
            gameSetup: state.gameSetup,
            player1Name: state.p1Name,
            player2Name: state.p2Name,
            winningTotal: state.win,
            alternateServeNum: state.alternateServe
        }
    }

const mapDispatchToProps = (dispatch) => {
    return {
        gameSetup: (data) => dispatch((gameStart(data)))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Setup);