import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = (state) => {
    return {
        gameSetup: state.gameSetup,
    }
}

export default connect(mapStateToProps)(App);