import SearchResults from '../components/SearchResults';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        // propName seen by React : value-in-state
        destination: state.destination,
        dates: state.dates

    }
}

export default connect(mapStateToProps)(SearchResults);