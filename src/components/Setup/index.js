import { connect } from 'react-redux';
import Setup from './Setup';
import { postGame } from '../../data/actions/api';


const mapStateToProps = (state) => {
    return {
            gameSetup: state.gameSetup,
            player1Name: state.p1Name,
            player2Name: state.p2Name,
        }
    }

const mapDispatchToProps = (dispatch) => {
    return {
        gameSetup: (data) => dispatch(postGame(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Setup);