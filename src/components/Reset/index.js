import { connect } from 'react-redux';
import Reset from './Reset';
import { reset } from '../../data/actions/state'

const mapDispatchToProps = (dispatch) => {
    return {
        reset: () => dispatch(reset())
    };
};

export default connect(null, mapDispatchToProps)(Reset);