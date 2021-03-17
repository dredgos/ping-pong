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
        gameSetup: () => dispatch((gameStart()))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Setup);