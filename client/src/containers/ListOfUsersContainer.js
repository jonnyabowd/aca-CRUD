import { connect } from 'react-redux';
import ListOfUsers from '../components/ListOfUsers';
import { setIsLoading } from '../actions'

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      setIsLoading: (txt) => dispatch(setIsLoading(txt))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ListOfUsers);